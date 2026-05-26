---
title: "Plugin: generator-release-notes"
description: Builds concise release notes from the current release context and commit history.
---

# Plugin: generator-release-notes

Builds concise release notes from the current release context and commit history. It is a good fit for provider plugins that publish release descriptions to Git forges.

## Installation

```bash
go install github.com/SemRels/generator-release-notes@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: generator-release-notes
    path: generator-release-notes
    args:
      template: templates/release-notes.tmpl
      max_commits: 50
      include_body: false
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_TEMPLATE` | no | `built-in template` | Path to a Go template used to render release notes. |
| `SEMREL_PLUGIN_MAX_COMMITS` | no | `50` | Maximum number of commits to include. |
| `SEMREL_PLUGIN_INCLUDE_BODY` | no | `false` | Include the full commit body in the generated notes. |

## Release Context Variables

- `SEMREL_TAG_NAME`
- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_BUMP`
- `SEMREL_BRANCH`
- `SEMREL_TAG_PREFIX`
- `SEMREL_DRY_RUN`

## Example Output

A generated release note can summarize `v1.4.0`, highlight the bump level, and list the top 50 commits selected for the release.

## Source

- [SemRels/generator-release-notes](https://github.com/SemRels/generator-release-notes)
