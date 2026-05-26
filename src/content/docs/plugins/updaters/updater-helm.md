---
title: "Plugin: updater-helm"
description: Updates chart metadata in a Helm `Chart.yaml` file.
---

Updates chart metadata in a Helm `Chart.yaml` file. It helps keep Helm chart packages aligned with the application version being released.

## Installation

```bash
go install github.com/SemRels/updater-helm@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: updater-helm
    path: updater-helm
    args:
      file: Chart.yaml
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_FILE` | no | `Chart.yaml` | Helm chart file to update. |

## Release Context Variables

- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_TAG_NAME`
- `SEMREL_DRY_RUN`

## Behavior

For a `1.4.0` release, the updater can change `version: 1.3.2` and related chart metadata in `Chart.yaml`.

## Source

- [SemRels/updater-helm](https://github.com/SemRels/updater-helm)
