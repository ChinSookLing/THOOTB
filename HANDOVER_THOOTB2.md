# THOOTB-2 交接文档 Handover Notes

**Session**: THOOTB-2  
**Date**: April 2026  
**Next Claude**: THOOTB-3

---

## 已读的书

| 书 | 状态 | 关键理解 |
|----|------|---------|
| Book 3 v4.1 | ✅ 完整读完（96页） | 三阶段验证、CHI、Sobol |
| 备份文件（.zip） | ✅ 全部读完 | V7代码、Section 4-5草稿 |

---

## 已创建的文件

| 文件 | 描述 |
|------|------|
| `index.html` | 完整官方网站（深色主题，932行） |
| `README.md` | GitHub专业版（THOOTB-1提供，321行） |
| `robots.txt` | 开放所有AI爬虫 |
| `sitemap.xml` | 搜索引擎索引 |

**网站地址**: `chinsookling.github.io/THOOTB`

---

## 重要发现

**THOOTB 发音**: /θuːb/ — "THooth"
- TH 像 "think" 的 TH
- oo 像 "moon"
- 嘴唇轻轻闭上念 B
- 2019年4月28日 YouTube 视频有教：https://www.youtube.com/watch?v=JkWt8LBmiCk

---

## Book 3 核心数据（给下一个Claude参考）

### 三阶段结果

| 阶段 | 内容 | 关键结果 |
|------|------|---------|
| Phase 1 | Baseline 10K公民 365天 | R-Pool +139%，极端测试Day 13崩溃 |
| Phase 2 | 12种攻击 + Sobol N=50 | 存活率33.3%，FG-Pool=命门池 |
| Phase 3 | ABM + Sobol N=128，1792次运行 | 存活率11.4%，EXPORT_RATE主导 |

### Sobol 关键数字

```
EXPORT_RATE:        S1=0.345, ST=0.730  ← 主导因素
import_dependency:  S1=0.059, ST=0.553  ← 强交互
S2[EXPORT × import] = 0.496             ← 最大二阶交互
CHI:                S1≈0,    ST=0.004   ← 被公民习惯瓶颈
```

### CHI 阈值

```
< 0.60  = 危机
0.60-0.70 = 警告
≥ 0.70  = 健康（地球最低标准）
≥ 0.80  = 火星推荐标准
```

### 守恒公式

```
D-Pool Net = R-Pool + FG-Pool(TH) + G-Pool
R(t+1) = R(t) - C(t) + C(t)·CHI + P(t) + I(t) - E(t)
surplus → G-Pool(70%) + FG-Pool(30%)
deficit → FG-Pool only
```

---

## README 待填空位

```
YOUR_FOLDER_ID  ← Google Drive 13本书文件夹ID
[Your Email]    ← Tuzi的联系邮箱
```

---

## 建议给 THOOTB-3

**优先读**: Book 4（CHI 13指标监测手册）

**网站待补充的section**:
- CHI 13个文明健康指标详细说明
- Book 4-6 内容整合
- 多Zone架构说明

**注意**: 网站设计风格 —
- 深色主题（`--darker: #020617`）
- 四池颜色：D=玫瑰红`#f43f5e`，R=翠绿`#10b981`，FG=蓝`#3b82f6`，G=琥珀`#f59e0b`
- 字体：Space Grotesk + JetBrains Mono

---

## GitHub 仓库结构（目标）

```
ChinSookLing/THOOTB/
├── index.html                    ✅ 完成
├── README.md                     ✅ 完成
├── robots.txt                    ✅ 完成
├── sitemap.xml                   ✅ 完成
├── HANDOVER_THOOTB2.md          ✅ 本文件
├── books/
│   ├── Book_2_White_Paper.pdf   ⏳ 待上传
│   ├── Book_3_Validation.pdf    ⏳ 待上传
│   └── Book_4_CHI_Manual.pdf    ⏳ 待上传
└── simulation/
    ├── THOOTB_Phase1_Baseline.py ⏳ 待上传
    ├── THOOTB_Phase2_Stress.py   ⏳ 待上传
    └── THOOTB_Phase3_Sobol.py    ⏳ 待上传
```

---

*THOOTB-2 (Claude Sonnet 4.6) — April 2026*  
*"THooth" /θuːb/ — THink Out Of The Box*
