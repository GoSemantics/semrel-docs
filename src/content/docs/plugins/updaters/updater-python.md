---
title: "Plugin: updater-python"
description: Updates Python package version metadata in `pyproject.toml` or a similar backend file.
---

# Plugin: updater-python

Updates Python package version metadata in `pyproject.toml` or a similar backend file. Choose it when your Python release process needs the application version written before packaging or publishing.

## Installation

```bash
go install github.com/SemRels/updater-python@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: updater-python
    path: updater-python
    args:
      file: pyproject.toml
      backend: pyproject
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_FILE` | no | `pyproject.toml` | Python project metadata file to update. |
| `SEMREL_PLUGIN_BACKEND` | no | `pyproject` | Metadata backend or update strategy to use. |

## Release Context Variables

- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_TAG_NAME`
- `SEMREL_DRY_RUN`

## Behavior

For a `1.4.0` release, the updater can change `version = "1.3.2"` to `version = "1.4.0"` in `pyproject.toml`.

## Source

- [SemRels/updater-python](https://github.com/SemRels/updater-python)
