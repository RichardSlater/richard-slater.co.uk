---
title: "Creating a basic Development Environment for RISC-V"
date: 2025-11-19T19:54:12+01:00
draft: false
summary: "Implementing Rust, Go, NeoVim, Chezmoi and VSCodium for Native RISC-V Development"
tags:
  [
    "Rust",
    "Go",
    "Software Engineering",
    "Profile",
    "RISC-V",
    "riscv64",
    "Git",
    "DevEnv",
    "Chezmoi",
    "NeoVim",
    "VSCodium",
  ]
---

I recently picked up an Orange Pi RV2 board which uses a SpacemiT Ky X1 RISC-V 64-bit CPU. My goal is to experiment a bit with the architecture, compile some of my little Go and Rust projects for it and get a semi-decent terminal experience with Zsh and NeoVim. Here's how I set things up.

{{< disclosure >}}

My current build is:

- [Orange Pi RV2 8GB](https://amzn.to/4oK1g9H)
- [Waveshare 5V 5A Type C PoE Splitter](https://amzn.to/48bO1HR)
- [Inexpensive Lexar 0.5TB NVMe SSD](https://amzn.to/3XI05eQ)

All of this is plugged into an 8-Port [Unifi PoE Switch](https://amzn.to/4i4Q3Ok) I already had.

## Zsh

This is available in the apt repository so a simple `sudo apt install zsh` will ensure that it's installed. If you want to make it your default shell, run:

```sh
chsh -s "$(which zsh)" $USER
```

## Rust

To install Rust, use `rustup` (recommended):

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

And make sure `$HOME/.cargo/env` is imported into your env via your profile.

Cross-compiling for Linux on riscv64 can be done by adding the appropriate target and building for it:

```sh
rustup target add riscv64gc-unknown-linux-gnu
cargo build --target riscv64gc-unknown-linux-gnu --release
```

If you're building bare metal or embedded, you may choose a different target like `riscv64imac-unknown-none-elf` and set up the linker accordingly.

## Go

Go is cross-compiled to many platforms and architectures, including `linux-riscv64` which the Orange Pi RV2 uses, so it's as simple as:

```sh
GOVER="1.25.4"
wget https://go.dev/dl/go${GOVER}.linux-riscv64.tar.gz
sha256sum go${GOVER}.linux-riscv64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go${GOVER}.linux-riscv64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go version
```

Before extracting, verify the checksum printed by `sha256sum` against the published hash on https://go.dev/dl/.

You can then ensure that the Go binary path (`/usr/local/go/bin`) is appended to your PATH in your `.profile` or similar.

Cross-compilation example (build on another host for riscv64):

```sh
env GOOS=linux GOARCH=riscv64 go build -o hello-riscv hello.go
file hello-riscv
```

## Oh My Posh

Once you have Go installed you can compile Oh My Posh from source:

```sh
mkdir -p ~/source
git clone https://github.com/JanDeDobbeleer/oh-my-posh.git ~/source/oh-my-posh
cd ~/source/oh-my-posh/src
CGO_ENABLED=0 go build -ldflags="-s -w" -o oh-my-posh .
mkdir -p ~/.local/bin
mv ./oh-my-posh ~/.local/bin/
chmod +x ~/.local/bin/oh-my-posh
export PATH="$HOME/.local/bin:$PATH"
```

Again make sure that you have `~/.local/bin` set up in your PATH as part of your profile.

## Chezmoi

Chezmoi can be installed via the official install script (or via your package manager):

```sh
sh -c "$(curl -fsLS get.chezmoi.io)"
```

{{< notice tip >}}
For extra safety, download the script first and inspect it before running, if it was available from your distribution package manager consider using that instead - but that seems unlikely for many packages in the immature RISC-V ecosystem.
{{< /notice >}}

## NeoVim

NeoVim (`nvim`) has some gotchas associated with it, namely because it bundles LuaJIT which plugins like LazyVim require, however the bundled version doesn't support the `riscv64` architecture.

You will definitely need the standard C toolchain with `ninja`:

```sh
sudo apt update
sudo apt install build-essential cmake ninja-build libtool libtool-bin autoconf pkg-config
```

### Install a LuaJIT Port

There are a couple of these, but I went with Plctlab's version:

```sh
git clone https://github.com/plctlab/LuaJIT.git ~/source/luajit-riscv
cd ~/source/luajit-riscv
# Use all cores to speed up the build
make -j$(nproc)
sudo make install
```

This will install LuaJIT in `/usr/local` and create the `.so` in `/usr/local/lib`.
After installing, update the dynamic linker cache so programs can find the new library:

```sh
echo "/usr/local/lib" | sudo tee /etc/ld.so.conf.d/usrlocal.conf
sudo ldconfig
```

### Build NeoVim

```sh
make DEPS_CMAKE_FLAGS="-DUSE_BUNDLED_LUAJIT=OFF -DUSE_BUNDLED_LUV=ON -DUSE_BUNDLED_LIBUV=ON" CMAKE_FLAGS="-DCMAKE_BUILD_TYPE=Release -DLUAJIT_INCLUDE_DIR=/usr/local/include/luajit-2.1 -DLUAJIT_LIBRARY=/usr/local/lib/libluajit-5.1.so -DCMAKE_INSTALL_RPATH=/usr/local/lib -DCMAKE_INSTALL_RPATH_USE_LINK_PATH=ON"
sudo make install
```

In theory you should now be able to run `nvim` and get a LuaJIT enabled NeoVim install available on the Orange Pi RV2. If you see runtime errors for shared libraries, confirm `/usr/local/lib` is in your dynamic linker path (e.g., check `/etc/ld.so.conf.d/`) or set `LD_LIBRARY_PATH`.

## Visual Studio Code

If you want more of an IDE then you might be tempted to try and use Visual Studio Code using Remote SSH; however this won't work out-of-the-box because Microsoft does not publish an official `riscv64` host build for the VS Code server component. Here are a few alternatives:

- Use `VSCodium` (open-source fork) with the [Open Remote - SSH](https://open-vsx.org/extension/jeanp413/open-remote-ssh) extension from OpenVSX.
- Run `code-server` (https://github.com/coder/code-server) on the riscv64 host and connect via your browser; code-server often has more architecture builds available.
- Use `sshfs` or `rsync` to sync files to a machine running VS Code locally and edit there.

{{< notice warning >}}
some remote extensions require a host binary matching the remote architecture — check the extension documentation and release assets for `riscv64` support.
{{< /notice >}}

## Summary

After a couple of hours building things from source I’m pretty happy with what I have — I can comfortably use it either from a remote terminal with NeoVim or remotely via VSCodium. Next steps will be to try some Go and Rust projects, verify cross-compilation, and experiment with running a small LLM on the device to see how usable it is.

## Cross-compilation examples

Rust (host target):

```sh
rustup target add riscv64gc-unknown-linux-gnu
cargo build --target riscv64gc-unknown-linux-gnu --release
```

Go (build for riscv64 from another host):

```sh
env GOOS=linux GOARCH=riscv64 go build -o hello-riscv hello.go
file hello-riscv
```

## Troubleshooting

- Check shared libraries for `nvim` or custom binaries with `ldd $(which nvim)` or `ldd ./mybinary`.
- Update the dynamic linker cache if a library in `/usr/local/lib` is not found: `sudo ldconfig` or add `/usr/local/lib` to `/etc/ld.so.conf.d/`.
- If cross compilation fails, ensure the correct Rust target is installed or the Go binary is available for riscv64.
- Always validate `sha256sum` output against the published checksums before installing tarballs downloaded from the internet.

Credit really goes to the authors of Rust, Go, NeoVim, the LuaJIT port and Chezmoi for making this all possible with relative ease! I find RISC-V to be a really interesting ISA and I look forward to seeing how it develops over the next decade.
