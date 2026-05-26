---
title: "Plugin: updater-maven"
description: Updates the version declared in a Maven `pom.xml` file.
---

# Plugin: updater-maven

Updates the version declared in a Maven `pom.xml` file. It is useful for Java projects that keep their canonical version in Maven metadata.

## Installation

```bash
go install github.com/SemRels/updater-maven@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: updater-maven
    path: updater-maven
    args:
      file: pom.xml
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_FILE` | no | `pom.xml` | Maven POM file to update. |

## Release Context Variables

- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_TAG_NAME`
- `SEMREL_DRY_RUN`

## Behavior

For a `1.4.0` release, the updater can replace `<version>1.3.2</version>` with `<version>1.4.0</version>` in `pom.xml`.

## Source

- [SemRels/updater-maven](https://github.com/SemRels/updater-maven)
