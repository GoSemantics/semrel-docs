---
title: "Plugin: updater-cargo"
description: Updates the version field in a Rust Cargo manifest.
---

Updates the version field in a Rust Cargo manifest. Use it to keep `Cargo.toml` aligned with the SemRel version chosen for the release.

## Installation

```bash
go install github.com/SemRels/updater-cargo@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: updater-cargo
    path: updater-cargo
    args:
      file: Cargo.toml
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_FILE` | no | `Cargo.toml` | Cargo manifest to update. |

## Release Context Variables

- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_TAG_NAME`
- `SEMREL_DRY_RUN`

## Behavior

For a `1.4.0` release, the updater can change `version = "1.3.2"` to `version = "1.4.0"` in `Cargo.toml`.

## Source

- [SemRels/updater-cargo](https://github.com/SemRels/updater-cargo)
