---
title: "Plugin: generator-changelog-md"
description: Generates a Markdown changelog for the pending release.
---

# Plugin: generator-changelog-md

Generates a Markdown changelog for the pending release. Use it when you want changelog output that can be committed, published, or reused by provider plugins.

## Installation

```bash
go install github.com/SemRels/generator-changelog-md@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: generator-changelog-md
    path: generator-changelog-md
    args:
      template: templates/changelog.md.tmpl
      max_commits: 100
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_TEMPLATE` | no | `built-in template` | Path to a Go template used to render the changelog. |
| `SEMREL_PLUGIN_MAX_COMMITS` | no | `100` | Maximum number of commits to include. |

## Release Context Variables

- `SEMREL_TAG_NAME`
- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_BUMP`
- `SEMREL_BRANCH`
- `SEMREL_TAG_PREFIX`
- `SEMREL_DRY_RUN`

## Example Output

A generated changelog can look like:

```md
## v1.4.0
- feat: add search endpoint
- fix: handle empty state
```

## Source

- [SemRels/generator-changelog-md](https://github.com/SemRels/generator-changelog-md)
