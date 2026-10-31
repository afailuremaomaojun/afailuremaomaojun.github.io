# Wentao Chen 学术主页

一个适合部署到 GitHub Pages 的静态学术主页。无需服务器或数据库，支持响应式布局、论文检索与筛选、BibTeX 复制。

## 日常维护（最常用）

**所有经常更新的内容都集中在 `src/data/siteContent.ts`。** 一般不需要修改组件或样式。

| 要修改的内容 | 在文件中的位置 |
| --- | --- |
| 姓名、邮箱、学校、导师、研究兴趣 | `profile` |
| 新闻动态 | `news` |
| 教育经历 | `education` |
| 研究主题及简介 | `topics` |
| 论文、作者、会议、DOI、获奖信息 | `publications` |

### 直接在 GitHub 网页中更新

1. 打开仓库中的 `src/data/siteContent.ts`。
2. 点击右上角的铅笔图标编辑内容。
3. 点击 **Commit changes** 提交到 `main` 分支。
4. GitHub Actions 会自动构建并更新主页，无需手动上传 `dist`。

### 新增论文

在 `publications` 数组中复制一篇现有论文的对象，再修改各字段：

```ts
{
  id: 'unique-paper-id',
  title: 'Paper title',
  authors: 'Author One, Wentao Chen, Author Two',
  venue: 'Conference or Journal · 2027',
  venueShort: 'Venue 2027',
  year: 2027,
  type: 'Conference', // 或 'Journal'
  rank: 'CCF-A',     // 或 'CCF-B'、'CCF-C'
  topic: 'maintenance',
  url: 'https://doi.org/...',
  doi: '...',         // 可选
  firstAuthor: true,  // 可选；非第一作者可删除此行
  award: 'Award name', // 可选；无获奖信息可删除此行
}
```

论文总数、CCF-A 数量、第一作者数量、获奖数量和各研究主题论文数都会自动更新。

## 部署到 GitHub Pages

仓库已包含 `.github/workflows/deploy.yml`，会在 `main` 分支更新时自动部署。

### 第一次部署

1. 将本项目源代码放入 GitHub 仓库；不需要上传 `node_modules` 或 `dist`。
2. 打开仓库 **Settings → Pages**。
3. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
4. 将代码推送到 `main` 分支，或在 **Actions** 中手动运行 **Deploy academic homepage to GitHub Pages**。
5. 工作流完成后，通过 GitHub Pages 地址访问网站。

对于 `afailuremaomaojun/afailuremaomaojun.github.io` 仓库，主页地址为 `https://afailuremaomaojun.github.io/`。

> 如果仓库默认分支不是 `main`，请同步修改 `.github/workflows/deploy.yml` 中的分支名称。

## 本地预览

要求 Node.js 20 或更高版本。

```bash
npm ci
npm run dev
```

打开终端显示的本地地址即可预览。

## 构建与检查

```bash
npm run lint
npm run build
npm run preview
```

生产文件生成在 `dist/` 中，并已包含 `.nojekyll`。`vite.config.ts` 使用相对资源路径，既支持 `username.github.io` 个人站点，也支持普通项目 Pages 地址。

## 页面功能

- 学术资料、研究兴趣、论文统计、新闻和教育经历
- 研究主题与论文筛选联动
- 论文标题、作者和会议搜索
- 第一作者、CCF-A 和年份筛选
- BibTeX 弹窗及剪贴板复制
- 键盘可访问的导航和弹窗、减少动态效果支持、打印样式
