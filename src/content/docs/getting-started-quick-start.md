---
title: Quick Start
description: Get started with semrel in 5 minutes
---

# Quick Start

## 1. Initialize a Go Project

```bash
mkdir my-semrel-project
cd my-semrel-project
go mod init github.com/myorg/my-semrel-project
```

## 2. Commit with Conventional Commits

```bash
git add .
git commit -m "feat: add new feature"
```

## 3. Generate Next Version

```bash
semrel calculate
```

Output: `v1.1.0`

## 4. Tag and Release

```bash
git tag v1.1.0
git push origin main v1.1.0
```

## Next Steps

- Read the [CLI Reference](/guide/cli)
- Explore [Monorepo Support](/guide/monorepo)
- Learn [Plugin Development](/plugins/overview)
