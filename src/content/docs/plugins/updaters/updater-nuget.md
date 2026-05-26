---
title: "Plugin: updater-nuget"
description: Updates the version property inside a `.csproj` or other NuGet project file.
---

# Plugin: updater-nuget

Updates the version property inside a `.csproj` or other NuGet project file. It helps keep .NET package metadata in sync with SemRel releases.

## Installation

```bash
go install github.com/SemRels/updater-nuget@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: updater-nuget
    path: updater-nuget
    args:
      file: src/App/App.csproj
      property: Version
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_FILE` | no | `*.csproj` | Project file or glob to update. |
| `SEMREL_PLUGIN_PROPERTY` | no | `Version` | XML property that stores the package version. |

## Release Context Variables

- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_TAG_NAME`
- `SEMREL_DRY_RUN`

## Behavior

For a `1.4.0` release, the updater can change `<Version>1.3.2</Version>` to `<Version>1.4.0</Version>`.

## Source

- [SemRels/updater-nuget](https://github.com/SemRels/updater-nuget)
