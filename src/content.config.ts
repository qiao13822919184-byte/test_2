import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 产品集合：每个产品 = src/content/products 下的一个 .md 文件
// 后台 (/admin) 以「文件夹集合」方式管理，可单独新增/删除/上传图片
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    category: z.string(), // 对应 src/data/categories.json 的 slug
    summary: z.string(),
    images: z.array(z.string()).default([]),
    material: z.string().optional(),
    moq: z.string().optional(),
    leadTime: z.string().optional(),
    finish: z.string().optional(),
    // 额外规格行（可选）：[{ label: "容量", value: "..." }]
    specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

// 博客集合：每篇文章 = src/content/blog 下的一个 .md 文件
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().default('Yumingxing'),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { products, blog };
