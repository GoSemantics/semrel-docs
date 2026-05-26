---
title: "Plugin: analyzer-default"
description: Determines the next SemVer bump by matching commit messages against regular expressions.
---

# Plugin: analyzer-default

Determines the next SemVer bump by matching commit messages against regular expressions. Choose it when you want custom versioning rules without adopting Conventional Commits.

## Installation

```bash
go install github.com/SemRels/analyzer-default@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: analyzer-default
    path: analyzer-default
    args:
      major_pattern: 'BREAKING|major:'
      minor_pattern: '^feat'
      patch_pattern: '^fix|^perf'
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_MINOR_PATTERN` | no | `plugin-defined regex` | Regular expression that triggers a minor bump. |
| `SEMREL_PLUGIN_PATCH_PATTERN` | no | `plugin-defined regex` | Regular expression that triggers a patch bump. |
| `SEMREL_PLUGIN_MAJOR_PATTERN` | no | `plugin-defined regex` | Regular expression that triggers a major bump. |

## Release Context Variables

This plugin does not require any of the shared `SEMREL_*` release context variables to do its job.

## Behavior

If a commit message matches `major_pattern`, the analyzer returns `major`. Otherwise it falls back to `minor_pattern`, then `patch_pattern`, and returns the highest matching bump.

## Source

- [SemRels/analyzer-default](https://github.com/SemRels/analyzer-default)
