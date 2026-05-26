---
title: "Plugin: updater-gradle"
description: Updates the version key in a Gradle properties file.
---

Updates the version key in a Gradle properties file. Use it to keep Java or Kotlin projects on the release version selected by SemRel.

## Installation

```bash
go install github.com/SemRels/updater-gradle@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: updater-gradle
    path: updater-gradle
    args:
      file: gradle.properties
      key: version
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_FILE` | no | `gradle.properties` | Gradle properties file to update. |
| `SEMREL_PLUGIN_KEY` | no | `version` | Property key that stores the version. |

## Release Context Variables

- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_TAG_NAME`
- `SEMREL_DRY_RUN`

## Behavior

For a `1.4.0` release, the updater can rewrite `version=1.3.2` to `version=1.4.0` in `gradle.properties`.

## Source

- [SemRels/updater-gradle](https://github.com/SemRels/updater-gradle)
