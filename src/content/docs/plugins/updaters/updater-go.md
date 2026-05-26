---
title: "Plugin: updater-go"
description: Updates a Go source file that exposes the project version.
---

Updates a Go source file that exposes the project version. It is typically used to keep a `version.go` constant in sync with the SemRel release version.

## Installation

```bash
go install github.com/SemRels/updater-go@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: updater-go
    path: updater-go
    args:
      file: version.go
      variable: Version
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_FILE` | no | `version.go` | Go source file to update. |
| `SEMREL_PLUGIN_VARIABLE` | no | `Version` | Variable or constant name that holds the version string. |

## Release Context Variables

- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_TAG_NAME`
- `SEMREL_DRY_RUN`

## Behavior

For a `1.4.0` release, the updater can change `const Version = "1.3.2"` to `const Version = "1.4.0"`.

## Source

- [SemRels/updater-go](https://github.com/SemRels/updater-go)
