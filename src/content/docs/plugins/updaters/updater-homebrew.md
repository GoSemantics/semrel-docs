---
title: "Plugin: updater-homebrew"
description: Updates a Homebrew formula with the new release URL and checksum.
---

Updates a Homebrew formula with the new release URL and checksum. Use it when SemRel publishes tarballs that also need to be reflected in a Homebrew tap.

## Installation

```bash
go install github.com/SemRels/updater-homebrew@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: updater-homebrew
    path: updater-homebrew
    args:
      formula_file: Formula/semrel.rb
      url_template: 'https://github.com/SemRels/semrel/archive/refs/tags/v{{ .NextVersion }}.tar.gz'
      sha256: '${{ env.RELEASE_SHA256 }}'
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_FORMULA_FILE` | yes | `—` | Homebrew formula file to update. |
| `SEMREL_PLUGIN_URL_TEMPLATE` | no | `plugin-defined` | Template used to build the download URL for the new release. |
| `SEMREL_PLUGIN_SHA256` | no | `—` | Checksum to write into the formula. |

## Release Context Variables

- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_TAG_NAME`
- `SEMREL_DRY_RUN`

## Behavior

For a `1.4.0` release, the updater can rewrite the formula URL to the `v1.4.0` archive and replace the `sha256` value with the supplied checksum.

## Source

- [SemRels/updater-homebrew](https://github.com/SemRels/updater-homebrew)
