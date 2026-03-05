# GitHub Push Rules

These rules define when updates must be committed and pushed to GitHub.

## 1) What counts as a major update
A change is considered **major** if it includes any of the following:
- New files or folders added for product, brand, prompts, design, or app structure
- Significant edits across multiple files
- New prompt sets, prompt architecture, or design-system changes
- Any update that changes direction, behavior, or deliverables
- Any milestone the team may need to reuse, review, or rollback

## 2) Required action after every major update
After every major update, do all of the following immediately:
1. Stage all intended files
2. Create a clear commit message
3. Push to `origin/main` (or current working branch if agreed)
4. Confirm push success and commit hash

## 3) Standard command sequence
```bash
git add .
git commit -m "<clear summary of major update>"
git push
```

## 4) Commit message standard
Use direct, specific commit messages. Examples:
- `Update Stitch prompts with GitHub logo asset URLs`
- `Refine desktop prompt rules and remove sidebar layout constraints`
- `Add brand components spec and design tokens`

## 5) Verification step (mandatory)
After pushing, verify:
```bash
git log -1 --oneline
git status
```
Expected result:
- latest commit visible
- clean working tree (or only intentional uncommitted work)

## 6) Exceptions
Do not push immediately only when:
- User explicitly says not to push yet
- Work is a draft/WIP and user wants batching
- Sensitive information is still being cleaned

If an exception is used, note it clearly in the working notes and push at the next approved checkpoint.

## 7) Public Repository Safety (mandatory)
Before every push to a public repository:
1. Run a sensitive-pattern scan on tracked files
2. Review staged changes (`git diff --staged`)
3. Confirm no credentials, secrets, private keys, or personal data are included

Required scan command:
```bash
git ls-files | xargs rg -n -S "(ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|BEGIN RSA PRIVATE KEY|BEGIN OPENSSH PRIVATE KEY|api[_-]?key\\s*[:=]|client_secret\\s*[:=]|password\\s*[:=]|Authorization:\\s*Bearer\\s+)"
```

If this command returns matches:
- stop the push
- remove or rotate exposed values
- commit only after the scan returns no matches
