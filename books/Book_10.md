**THOOTB Book 10｜THOTOB 區域會計系統**

**THOOTB Zone Accounting System**

**前端用戶數據庫 vs 後端控制台數據庫**

**Multi-Tenant Schema vs System Console Schema**

作者：Chin Sook Ling

人工智慧協作：ChatGPT、Claude、Copilot、DeepSeek、Gemini、Grok

版本：1.1（完整學術論文）

日期：2026年1月

開放來源授權：知識共享署名4.0國際授權協議 (CC BY 4.0)

唯一限制：不得違背四大核心原則

──────────────────────────────

原始文本：中文

Language Note: Original text in Chinese

──────────────────────────────

**Table of Contents**

**Preface 序言**

- 個人序言（Tuzi 真實故事）

- 技術前言

**Part A: Philosophy 哲學篇**

- Chapter 0: Why Accounting Comes Before Power

- Chapter 1: Design Philosophy

- Chapter 2: What This System Is NOT

**Part B: Architecture 架構篇**

- Chapter 3: The 4-Pool Ledger Architecture

- Chapter 4: Two-Database Design

- Chapter 5: Entity Structure

**Part C: Operations 運營篇**

- Chapter 6: Daily Operations Cycle

- Chapter 7: Voucher System

- Chapter 8: Journal Rules & Event Integrity

- Chapter 9: CPA / CPV as Custodial States

**Part D: Governance 治理篇**

- Chapter 10: Human Roles & Separation of Duties

- Chapter 11: What the System Forbids (Quietly)

- Chapter 12: SOP for Exceptional Scenarios

**Part E: Portal Specifications 門戶規格篇**

- Chapter 13: Console

- Chapter 14: Citizen Portal

- Chapter 15: Business Portal

- Chapter 16: Government Portal

- Chapter 17: 3T Portal

**Part F: Validation & Future 驗證與未來篇**

- Chapter 18: Test Scenarios

- Chapter 19: Version History

- Chapter 20: Future Considerations

**Appendix 附錄**

- A: Chart of Accounts

- B: Screenshots 系統截圖

- C: Complete Source Code (v2.0)

**個人序言：種子的起源**

這不是學術序言，而是一個人的故事——一顆種子的起源。

**一、那個瞬間（1980年代）**

小學放學的午後，我騎著腳踏車摔倒在路邊。電光石火間，我短暫體驗了全然全知：沒有我，沒有時間，只有純粹的存在與喜悅。隨即被拉回身體，伴隨劇痛與悵然。

那一刻，我明白：地球的快樂並非真正的快樂。

這段經驗讓我理解《起世經》中的光音天，也成為 THOOTB 的終極目標原型——透過系統設計，幫助人類接近高頻狀態。

**二、效率之外的頻率（1995）**

作為馬來西亞青年大使，我在日本的破冰遊戲中，一眼看穿最高效的解法，卻無法融入同伴的「快樂混亂」。

我學到：效率之外，還有一種頻率，叫過程的意義。

這塑造了 THOOTB 的矛盾：我能設計最優系統，但人類需要的不只是效率，更是意義。

**三、癌症中心的覺醒（2017–2021）**

在醫療領域的工作中，我逐漸看清一個殘酷的現實：治療不再只是照顧，而常常被包裝成一門生意。

我見過藥物的真實成本與病人支付的價格之間存在巨大落差。低成本的藥物，卻因制度與市場邏輯，被以數百倍的價格賣給絕望的病人。

在生命的最後階段，許多人不得不賣掉房子、借貸、甚至放棄治療。這不是醫療的初衷，而是一種制度性的失衡。

某天早晨刷牙時，我突然意識到：如果醫療能被商業邏輯扭曲到如此程度，那麼地球上的其他系統也可能同樣如此。我必須用我熟悉的工具——會計思維——來設計一個不同的可能。

這個念頭，成為 THOOTB 的起點，也是 Sincere Cost（誠實成本）的源頭：醫療不應該是生意，而應該回歸照顧。

**四、無人理解的種子（2019）**

書出版後，幾乎無人問津。直到某天，我聽到電影《Lucy》的台詞：

"I'm not even sure that mankind is ready for it. We're so driven by power and profit."

我釋然了。THOOTB 不允許利潤，而地球尚未準備好。

那一刻，我改變想法：THOOTB 不是為現在寫的，它是一顆金剛種子。

**五、AI 協作：從孤獨到協奏（2019–2026）**

2019 年，我獨自寫完 45 頁，邏輯充滿漏洞卻無人討論。

2024–2026 年，AI 的出現改變了一切。ChatGPT、Claude、Copilot、DeepSeek、Gemini、Grok 成為我的協奏者。

我是指揮，決定哲學與原則；AI 是樂手，負責邏輯驗證與知識整合。

沒有指揮，樂手各彈各的；沒有樂手，指揮無法完成交響樂。最終，這是指揮的作品。

**六、2026年1月2日：第一次輸入數據**

那一天，我第一次在 THOOTB Zone Accounting System 輸入真實的交易數據。

當我按下「12:00am Allocation」，看著 D-Pool 的錢流向每一個實體；當我輸入一筆 Purchase，看著錢從 Business A 流向 R-Pool；當我按下「23:59pm Return」，看著所有未用完的錢回到 D-Pool...

我突然明白了一件事：

**這不只是會計系統。這是文明的心跳。**

每一天，D-Pool 發放，實體使用，未用完的回收，第二天重新開始。這個循環，就像心臟泵血一樣，讓整個系統活著。

**七、種子的意義**

這份序言，記錄了一顆種子如何從生命經驗萌芽，並在 AI 的協助下，成長為可傳承的系統。

它不完美，但誠實。 它不全知，但盡力。 它不保證成功，但值得嘗試。

願它在未來某個時代，找到土壤，發芽成為文明的另一種可能。

**Preface 技術前言**

**這本書是什麼**

這本書是 THOOTB 會計系統的技術規格說明書。

- 它不是哲學論述（那是 Book 1-7）

- 它不是模擬器（那是 Book 9）

- 它不是審計與權力（那是 Book 11）

它是一本「怎麼做」的書：

- **怎麼設計** 一個 Care & Support 而不是 Surveillance & Control 的系統

- **怎麼架構** 前端用戶數據庫和後端控制台數據庫

- **怎麼記帳** 用 PV/RV/JV/SV 四種憑單

- **怎麼驗證** Balance Equation 是否平衡

**這本書不是什麼**

這本書**不是** Production-ready 的系統文檔。

v2.0 是一個 Prototype——一個可以運作的原型，用來：

- ✅ 驗證邏輯 — 證明 THOOTB 會計邏輯可行

- ✅ 快速迭代 — 今天討論，今天修改

- ✅ 視覺化 — 可以看到、點擊、測試

- ✅ 規格說明 — 未來開發團隊可以照著做

當有人說「Let's do it」的時候，開發團隊可以拿著這本書，用真正的 Production 技術（PostgreSQL、Node.js、JWT Authentication）重新實現。

我們專注在「設計正確」，他們專注在「技術實現」。

**給讀者的話**

**如果你是 Zone Founder：**

- 這本書會告訴你，Console 能看什麼、不能看什麼

- 記住：你是 Observer，不是 Controller

**如果你是開發者：**

- Appendix C 有完整的 v2.0 源代碼

- 每個 Portal 的規格都在 Part E

**如果你是會計人員：**

- Part C 解釋了 Voucher System

- 你會發現這比傳統會計簡單很多，因為沒有「利潤」這個概念

**如果你是好奇的讀者：**

- 從 Part A 開始，理解為什麼我們這樣設計

- 然後跳到 Chapter 6，看 Daily Operations Cycle

**Tuzi (Chin Sook Ling)** **2026年1月3日** **馬來西亞**

"This system exists so that no one needs to panic." 「這是一個讓人可以安心工作的系統。」

**Part A: Philosophy 哲學篇**

**Chapter 0: Why Accounting Comes Before Power**

**為什麼會計先於權力**

**0.1 Order Before Authority 秩序先於權力**

在傳統世界裡，我們習慣這樣的順序：

1.  先有權力（誰是老闆？）

2.  再定規則（老闆說什麼？）

3.  最後才記帳（發生了什麼？）

這個順序有一個致命問題：**權力可以改變記錄。**

老闆不喜歡某筆支出？刪掉。審計發現問題？改掉。歷史不好看？重寫。

**THOOTB 顛倒這個順序：**

1.  先有記錄（發生了什麼？）

2.  記錄產生秩序（規律是什麼？）

3.  秩序約束權力（誰都不能改）

這就是為什麼 Book 10（會計系統）要在 Book 11（審計與權力）之前。

**沒有可靠的記錄，就沒有可信的權力。**

**0.2 Records Before Rules 記錄先於規則**

**傳統會計是「規則驅動」的：**

1.  先定義：什麼是資產？什麼是負債？

2.  再分類：這筆交易屬於哪個科目？

3.  最後記錄：借方貸方各多少？

**THOOTB 會計是「事件驅動」的：**

1.  先記錄：什麼事情發生了？（Event Sourcing）

2.  事件自己說話：誰付錢給誰？多少？什麼時候？

3.  規則只是「讀取方式」：不同的報表，讀取同一份記錄

這意味著：

**記錄是事實，規則是詮釋。事實不變，詮釋可以進化。**

**0.3 Calm as a System Property 平靜是系統屬性**

為什麼這本書的定位是「讓人可以安心工作」？

因為傳統系統讓人焦慮：

- 月底要結帳 → 趕工

- 審計要來了 → 緊張

- 數字對不上 → 恐慌

- 老闆要報表 → 壓力

**THOOTB 系統設計的目標是消除這些焦慮的根源：**

| **傳統焦慮** | **THOOTB 設計**           |
|--------------|---------------------------|
| 月底趕帳     | 即時記錄，沒有「結帳」    |
| 怕審計       | 所有記錄自動存在 TRD      |
| 數字對不上   | Balance Equation 即時驗證 |
| 報表壓力     | Console 即時顯示          |

**平靜不是因為沒有問題，而是因為問題會即時被看見、即時被處理。** **當系統本身就是平靜的，使用系統的人也會平靜。**

**Chapter 1: Design Philosophy**

**設計哲學**

**1.1 Pools Are Organs, Not Actors 池子是器官，不是主體**

在傳統會計裡，每個帳戶都是一個「主體」——它可以買東西、賣東西、賺錢、虧錢。

在 THOOTB 裡，4 個 Pool 不是主體，而是器官：

| **Pool** | **器官比喻** | **功能**       |
|----------|--------------|----------------|
| D-Pool   | 心臟         | 泵送資源       |
| R-Pool   | 倉庫         | 儲存物資       |
| FG-Pool  | 肺           | 呼吸（進出口） |
| G-Pool   | 腎臟         | 過濾、儲備     |

**器官不會「想要」更多血液。它們只是執行功能。** **這就是為什麼 Pool 不能有 Revenue（收入）或 Profit（利潤）——器官不做生意。**

**1.2 Entities Without Accumulation 無累積的實體**

傳統經濟的核心驅動力是累積：

- 個人累積財富

- 公司累積利潤

- 國家累積 GDP

**THOOTB 的實體不能累積 TH：**

- 每天 12:00am 發放

- 每天 23:59pm 回收未用完的

- 第二天重新開始

這不是「懲罰儲蓄」，而是改變遊戲規則：

**當累積不再可能，囤積、投機、壟斷就失去意義。** **資源會流動，而不是堵塞。**

**1.3 Time Over Value 時間重於價值**

傳統會計問的是：這值多少錢？ THOOTB 會計問的是：這發生在什麼時候？

這就是為什麼我們的 Transaction ID 格式是：

20260102143000-P8500000001-B1234567890-300-XYZ789

└14位時間戳┘

時間戳精確到秒，因為：

- 順序很重要（誰先誰後）

- 時間不可逆（發生了就是發生了）

- 時間是公平的（每個人的一秒都一樣長）

**價值是主觀的，時間是客觀的。** **當我們用時間來組織記錄，爭議就減少了。「這值多少」可以討論，「這什麼時候發生」不能討論。**

**1.4 Care & Support, NOT Surveillance 關懷與支持，而非監控**

這是 THOOTB 最重要的設計原則之一。

**傳統系統的邏輯是：**

「人會作弊，所以我們要監控。」 「監控越多，作弊越少。」

這個邏輯的問題是：它把每個人都當成嫌疑犯。

**THOOTB 的邏輯是：**

「人需要支持，所以我們提供工具。」 「工具越透明，信任越高。」

**具體設計：**

3T 的設計就是這個原則的體現：

- **TRD（記錄）：** 只寫入，不讀取個人資料

- **TAD（分析）：** 只看統計，不看個案

- **TIAD（調查）：** 需要人類授權才能看細節

**系統的存在是為了讓人安心工作，不是讓人害怕被監視。**

**Chapter 2: What This System Is NOT**

**這個系統不是什麼**

**2.1 It Does Not Maximize 它不最大化**

傳統經濟系統的目標是「最大化」：

- 最大化利潤

- 最大化效率

- 最大化增長

**THOOTB 不追求最大化。它追求平衡。**

Balance Equation 就是平衡的體現：

D-Pool Net = R-Pool + FG-Pool + G-Pool

左邊等於右邊，不多不少。

**這不是經濟系統，這是生態系統。生態系統不最大化，它循環。**

**2.2 It Does Not Compete 它不競爭**

傳統市場的假設是：競爭產生效率。 THOOTB 的假設是：協作產生韌性。

在 THOOTB 裡：

- 沒有「市場份額」的概念（每個實體有每日額度）

- 沒有「打敗對手」的動機（沒有利潤可以累積）

- 沒有「壟斷」的可能（任何實體不能超過 20% 市場）

這不是烏托邦幻想，而是設計選擇。

當競爭不再是驅動力，人們會問不同的問題：

- 不是「怎麼賺更多」，而是「怎麼服務得更好」

- 不是「怎麼打敗他」，而是「怎麼和他合作」

- 不是「怎麼囤積資源」，而是「怎麼讓資源流動」

**2.3 It Stabilizes 它穩定**

傳統經濟系統是動態不穩定的：

繁榮 → 泡沫 → 崩潰 → 復甦 → 繁榮...

這個循環被認為是「正常的」。

**THOOTB 設計的目標是動態穩定：**

- 每天重置，不累積泡沫

- 資源流動，不形成堵塞

- 異常即時可見，不等到崩潰

這就像人體的恆溫系統：

- 不是「沒有變化」

- 而是「變化在可控範圍內」

- 37°C ± 0.5°C，不是 37°C 永遠不變

**穩定不是靜止，是動態平衡。**

**Part A 完**

**Part B: Architecture 架構篇**

**Chapter 3: The 4-Pool Ledger Architecture**

**四池總帳架構**

**3.1 D-Pool: Rhythm 心跳**

**D-Pool = Daily Distribution Pool（每日流通池）**

如果 THOOTB 是一個身體，D-Pool 就是心臟。

**帳號格式 ⭐**

D-Pool 帳號：D + ZoneCode + YYMMDD

每天生成新的 D-Pool 帳號：

- 2026-01-03: DE0001260103

- 2026-01-04: DE0001260104

- 2026-01-05: DE0001260105

**每天一個新帳號！**

**關鍵特性**

- **每日清零：** D-Pool 不累積餘額

- **等額發放：** 每個公民 TH 1,000，不論身份

- **自動執行：** System Voucher (SV) 自動產生

**帳戶結構**

D-Pool (DE0001260103) ← 每日新帳號

├── Bank (TH) ← 今日可發放總額

├── Issued {} ← 已發放給各實體的明細

├── Returned {} ← 已回收的明細

└── Net Flow ← Issued - Returned = 流入實體經濟的金額

**心跳比喻**

心臟泵血：

收縮 → 血液流向全身 → 舒張 → 血液回流

D-Pool 泵 TH：

12:00am → TH 流向實體 → 23:59pm → 未用 TH 回流

**D-Pool Net = 今天真正「用掉」的資源量。**

**3.2 R-Pool: Substance 實體**

**R-Pool = Resource Tracking Pool（物資記錄池）**

如果 D-Pool 是心臟，R-Pool 就是倉庫。

**關鍵特性**

- **無 Revenue：** R-Pool 不是銷售主體

- **無 Profit：** 沒有成本、沒有利潤

- **Transfer Only：** 只做資源轉移

**帳戶結構**

R-Pool

├── Bank (TH) ← 實體購買後流入的 TH

└── Stock ← 可供應的資源量

**倉庫比喻**

傳統倉庫：買貨 → 加價 → 賣貨 → 賺差價

R-Pool：存貨 → 實體取貨 → 記錄流動 → 無差價

**R-Pool 的 Bank = 實體從本地採購的總金額。**

**3.3 FG-Pool: Interface 界面**

**FG-Pool = Foreign Gateway Pool（金融氣密艙）**

FG-Pool 是 Zone 與外部世界的肺——負責呼吸（進出口）。

**關鍵特性**

- **雙幣種：** TH（本地）+ FC（外幣）

- **無 Revenue：** FG-Pool 不是貿易主體

- **Gate/Buffer：** 緩衝區，不是利潤中心

**帳戶結構**

FG-Pool

├── Bank (TH) ← 進口時流入的 TH

├── Bank (FC) ← 出口時流入的 FC

├── CPV-Import ← 已付款未收貨（Custody Pending Value）

└── CPA-Export ← 已出貨未收款（Custody Pending Asset）

**肺的比喻**

肺：吸入氧氣（外部資源）→ 呼出二氧化碳（本地產出）

FG-Pool：進口（外部商品）→ 出口（本地服務）

**FG-Pool 的 Bank = Zone 與外部世界的交換量。**

**3.4 G-Pool: Memory 記憶**

**G-Pool = Global Strategic Reserve Pool（戰略儲備池）**

G-Pool 是 Zone 的腎臟——過濾、儲備、應急。

**關鍵特性**

- **唯一有 Revenue 的 Pool：** Premium 是 G-Pool 的收入

- **不輕易動用：** 應急釋放需要人類授權

- **跨週期記憶：** 不像 D-Pool 每日清零

**帳戶結構**

G-Pool

├── Bank (TH) ← 儲備資金

├── Premium ← 累積的保障金收入

└── Emergency Payable ← 緊急釋放的待償還金額

**腎臟比喻**

腎臟：過濾廢物 → 保持體液平衡 → 緊急時釋放激素

G-Pool：收取 Premium → 維持儲備 → 緊急時釋放資金

**G-Pool 的 Bank = Zone 的安全緩衝。**

**3.5 Balance Equation: Daily Verification**

**會計平衡方程式（質能守恆定律）**

**公式：**

D-Pool Net = R-Pool + FG-Pool (TH) + G-Pool

**註：** 這裡的 Pool 指的是各池的「淨流入」，不是「Bank 餘額」。

「Bank」這個詞容易讓人誤以為是金融機構或現金帳戶。但在 THOOTB 裡，Pool 是資源池、分錄集合，不是銀行。 — Copilot 建議，2026-01-02

**流程圖**

D-Pool

│

│ 12:00am Issue

▼

┌─────────────────┐

│ Entity Economy │

│ (Citizens, Businesses, Gov) │

└─────────────────┘

│

┌──────┼───────┐

│ │ │

▼ ▼ ▼

┌───┐ ┌────┐ ┌───┐

│R-Pool│ │FG-Pool │ │G-Pool│

│ 本地 │ │ 外貿 │ │ 保障 │

└───┘ └────┘ └───┘

│ │ │

└──────┼───────┘

│

▼

D-Pool Net (淨流出)

= R-Pool + FG-Pool + G-Pool

**驗證**

如果左邊 ≠ 右邊，說明：

- 有錢「消失」了 → 系統 Bug

- 有錢「憑空出現」→ 系統 Bug

- 記帳錯誤 → 需要調查

**為什麼叫「質能守恆定律」？**

傳統經濟：錢可以憑空創造（印鈔）、憑空消失（壞帳）

THOOTB：錢只能流動，不能創造或消滅

這保證了：

- 過去的記錄可信

- 現在的狀態可驗證

- 未來的預測可靠

**定錨句**

D-Pool Net 是各子池的合計，而不是銀行餘額的加總。 用「Pool」比「Bank」更符合治理與會計邏輯。

**Balance Equation 是 THOOTB 的「質能守恆定律」。**

**Chapter 4: Two-Database Design**

**雙數據庫設計**

**4.1 為什麼要分開？**

**傳統系統的問題：**

單一數據庫

├── 所有人的交易明細

├── 所有人的餘額

├── 所有人的個資

└── 管理員可以看到一切 ← 問題在這裡

**THOOTB 的設計：**

前端數據庫（Entity Portal） 後端數據庫（Console）

├── 我的交易明細 ├── 4-Pool 總量

├── 我的餘額 ├── 趨勢統計

├── 我的個資 ├── Balance Equation 驗證

└── 只有我能看 └── 只看聚合數據

**分離的原則：Entity 擁有自己的數據，Console 只看 Pool 層級。**

**4.2 Frontend: Multi-Tenant User Database**

**Entity Portal = Data Entry 數據入口**

每個實體有自己的 Portal：

**數據歸屬**

Citizen A 的數據：

├── 只有 Citizen A 能看

├── 只有 Citizen A 能輸入

├── Console 看不到明細

└── 3T 需要授權才能調查

**Multi-Tenant 架構**

同一個系統，不同的「租戶」：

Tenant: Citizen A → 看到 Citizen A 的 Portal

Tenant: Business B → 看到 Business B 的 Portal

Tenant: GOV-RD → 看到 Registry Dept 的 Portal

每個租戶彼此隔離，互不可見。

**4.3 Backend: System Console Database**

**Console = Observatory 觀測站**

Console 是 Zone Founder 的視角，但只能觀測，不能干預。

**為什麼這樣設計？**

傳統老闆：「讓我看看員工都買了什麼。」

THOOTB Founder：「讓我看看系統是否健康。」

不同的問題，不同的視角。

**Founder 需要知道的是：**

- D-Pool 有沒有發放成功？

- 資源有沒有流動？

- Balance Equation 有沒有平衡？

**Founder 不需要知道的是：**

- 張三買了什麼午餐

- 李四付了多少房租

- 王五和誰做生意

**Console 的權限邊界**

✅ 可以做：

- 觸發 12:00am Allocation（但金額是固定的）

- 觸發 23:59pm Return（但邏輯是自動的）

- 查看 4-Pool Summary

- 驗證 Balance Equation

❌ 不能做：

- 修改任何實體的餘額

- 查看任何個人交易

- 刪除任何記錄

- 繞過 3T 直接調查

**Console 是望遠鏡，不是遙控器。**

**Chapter 5: Entity Structure實體結構**

**5.1 Citizen 公民**

**每日額度**

Daily Spending: TH 1,000

每個公民，無論年齡、職業、貢獻，每天都獲得相同的額度。

**帳戶結構**

Citizen Account

├── Bank (TH) ← 當日可用餘額

├── Trailer ← 分期購買的資產（如 Campervan）

├── Creditor-Installment ← 分期付款的負債

└── Net Worth ← Bank + Trailer - Creditor

**交易類型**

| **類型** | **說明**         | **Voucher** |
|----------|------------------|-------------|
| 購物     | 向 Business 購買 | PV          |
| 收款     | 從 Business 收款 | RV          |
| 分期     | 大額資產分期     | JV          |

**5.2 Business 商家**

**每日額度**

Business A (General Trading): TH 35,000

Business B (Utility Provider): TH 20,000

不同類型的商家有不同的營運額度。

**帳戶結構：資產負債表 Balance Sheet**

Balance Sheet as at \[Date\]

───────────────────────────────────────

Assets 資產

├── Car 汽車

├── Furniture 傢俱

├── Equipment 設備

├── Stock (local currency) 存貨（本幣計價）

├── Stock (foreign currency) 存貨（外幣計價）

├── Stock (goods) 存貨（實物）

├── 循環成本吸收調整 Cycle Cost Absorption Adjustment

├── Bank (local currency) 銀行（本幣）

├── Bank (foreign currency) 銀行（外幣）

├── Debtor-installment-1 應收分期款-1

├── Debtor-installment-2 應收分期款-2

└── Received on behalf of customer 代收客戶款項

Liabilities 負債

├── Creditor-installment 應付分期款

└── Total

Fund 資金

├── D-Pool D-Pool 分配

└── Total

───────────────────────────────────────

**帳戶結構：損益表 Trading Account**

Trading Account as at \[Date\]

───────────────────────────────────────

Sales 銷售收入

├── Sales (credit sales) - local currency 賒銷（本幣）

├── Sales (credit sales) - foreign currency 賒銷（外幣）

└── Service Sales (by R-Pool) 服務銷售

COGS 銷貨成本 (Debit/Expense)

├── Opening Stock 期初存貨

├── Manufacturing Account 製造帳戶

├── Purchase from R-Pool 從 R-Pool 採購

├── Purchase of Raw Material/Goods (local) 採購原料/商品（本幣）

├── Factory Overhead 工廠間接費用

├── Closing Stock (Trading - local currency) 期末存貨（本幣）

├── Closing Stock (Trading - foreign currency) 期末存貨（外幣）

└── Closing Stock (Trading - goods) 期末存貨（實物）

Less: Expenses 減：費用

├── Admin Expense 行政費用

├── Living Expense 生活費用

├── Medical Service 醫療服務

└── Utility Expense 水電費用

循環成本吸收調整 Cycle Cost Absorption Adjustment

───────────────────────────────────────

**💡 循環成本吸收調整：Self-Audit Mechanism**

這是 THOOTB 最巧妙的設計之一。

**傳統會計：**

Sales - COGS - Expenses = Net Profit → 老闆口袋

**THOOTB 會計：**

Sales - COGS - Expenses = 差額 → 循環成本吸收調整 → 回饋到商品

**情境 1：正常營運（效率提升）**

Trading Account:

Sales TH 100,000

\- COGS (TH 60,000)

\- Expenses (TH 30,000)

─────────────────────────────────────

差額 TH 10,000（傳統叫「利潤」）

循環成本吸收調整 (TH 10,000) ← 吸收掉

─────────────────────────────────────

淨額 TH 0 ← 沒有利潤！

月末分錄：

Dr 循環成本吸收調整 (Trading Account) TH 10,000

Cr 循環成本吸收調整 (Balance Sheet) TH 10,000

結果：

→ 下月 Stock Cost 降低

→ 商品變便宜

→ 消費者受益 😊

**情境 2：異常支出（自動審計觸發）**

如果多付了某筆費用：

Dr Expenses (異常增加)

Cr Bank

Trading Account:

Sales TH 100,000

\- COGS (TH 60,000)

\- Expenses (TH 50,000) ← 異常！多了 TH 20,000

─────────────────────────────────────

差額 (TH 10,000)（傳統叫「虧損」）

循環成本吸收調整 TH 10,000 ← 反向吸收

─────────────────────────────────────

淨額 TH 0

月末分錄：

Dr 循環成本吸收調整 (Balance Sheet) TH 10,000

Cr 循環成本吸收調整 (Trading Account) TH 10,000

結果：

→ 下月 Stock Cost 增加

→ 商品變貴

→ 消費者馬上發現：「為什麼漲價了？」🤔

→ 自動審計！無需審計師！

**為什麼這是 Self-Audit Mechanism？**

**價格就是最透明的審計報告！** **全民都是審計師！** 👀

**為什麼不放在 v2.0 系統？**

這個機制是自然產生的結果，不是需要「操作」的功能：

- v2.0 聚焦在：D-Pool 發放/回收、4-Pool 流動、Balance Equation

- 循環成本吸收調整會在月結時自動計算

- 詳細實現將在 Production 版本處理

**關鍵特性**

- **無 Net Profit：** 差額被「循環成本吸收調整」吸收

- **Sincere Cost：** 商品價格 = 真實成本

- **Self-Audit：** 異常自動反映在價格上

- **每日重置 Bank：** 未用完的錢回到 D-Pool

**5.3 Government 政府**

**9 個部門**

| **類型** | **部門**             | **額度**   |
|----------|----------------------|------------|
| Human    | RD (Registry)        | TH 50,000  |
| Human    | GD (Governance)      | TH 80,000  |
| Human    | OD (Operations)      | TH 120,000 |
| Human    | SD (Simulation)      | TH 60,000  |
| Human    | StD (Stewardship)    | TH 40,000  |
| Human    | ID (Interface)       | TH 70,000  |
| 3T       | TRD (Record)         | TH 30,000  |
| 3T       | TAD (Analysis)       | TH 25,000  |
| 3T       | TIAD (Investigation) | TH 25,000  |

**帳戶結構**

Government Department Account

├── Bank (TH) ← 當日可用餘額

├── Prepayment ← 預付款（已付未收貨）

└── Fixed Assets ← 固定資產

**6 Human + 3T 分權**

6 Human Departments：

├── 負責日常運營

├── 可以花錢、採購、支付

└── 受 3T 監督

3T Departments：

├── TRD：記錄所有交易（Write Only）

├── TAD：分析趨勢統計（Read Only）

└── TIAD：調查異常（需授權）

**互相制衡，沒有任何單一部門有完全控制權。**

**5.4 Daily Spending Summary**

**每日總發放**

| **實體**      | **數量** | **單位額度** | **小計**       |
|---------------|----------|--------------|----------------|
| Citizen       | 1        | TH 1,000     | TH 1,000       |
| Business A    | 1        | TH 35,000    | TH 35,000      |
| Business B    | 1        | TH 20,000    | TH 20,000      |
| 6 Human Depts | 6        | 各自額度     | TH 420,000     |
| 3T Depts      | 3        | 各自額度     | TH 80,000      |
| **Total**     |          |              | **TH 556,000** |

**這個數字的意義**

每天 D-Pool 發放 TH 556,000

- 如果 23:59pm 全部回收 → D-Pool Net = 0 → 沒有經濟活動

- 如果 23:59pm 一分不剩 → D-Pool Net = 556,000 → 100% 使用率

正常情況下，D-Pool Net 應該在某個健康範圍內。

**Daily Spending = Zone 的新陳代謝速率。**

**Part B 完**

**Part C: Operations 運營篇**

**Chapter 6: Daily Operations Cycle**

**每日運營週期**

**6.1 12:00am Issuance 發放**

每天的第一個動作：D-Pool 向所有實體發放當日額度。

**時間點：** 00:00:00 (午夜 12 點整)

**新 D-Pool 帳號產生**

每日 00:00:00，系統自動產生新的 D-Pool 帳號：

2026-01-02 的 D-Pool: DE0001260102 (已結束)

2026-01-03 的 D-Pool: DE0001260103 (今日新帳號) ← 發放從這裡

2026-01-04 的 D-Pool: DE0001260104 (尚未產生)

**系統自動執行 - System Voucher (SV) 自動產生：**

SV-260103-0001 \| 00:00:00 \| D-Pool → Citizen A \| TH 1,000

SV-260103-0002 \| 00:00:00 \| D-Pool → Business A \| TH 35,000

SV-260103-0003 \| 00:00:00 \| D-Pool → Business B \| TH 20,000

SV-260103-0004 \| 00:00:00 \| D-Pool → GOV-RD \| TH 50,000

...

SV-260103-0012 \| 00:00:00 \| D-Pool → GOV-TIAD \| TH 25,000

**會計分錄（每個實體視角）**

實體收到 D-Pool 發放：

Dr Bank (TH) TH 1,000

Cr Fund - D-Pool TH 1,000

**D-Pool 視角**

D-Pool 發放：

Dr D-Pool Issued TH 556,000

Cr D-Pool Bank TH 556,000

**6.2 Daytime Flow 日間流動**

從 00:00:01 到 23:58:59，資源在實體之間自由流動。

**D-Pool 不干預** - 日間期間，D-Pool 只是「觀察者」：

- 不追蹤每一筆交易

- 不限制誰能跟誰交易

- 不設定價格

**流動方向**

Citizen ←→ Business (購物、服務)

Business ←→ Business (B2B 採購)

Business ←→ R-Pool (本地資源採購)

Business ←→ FG-Pool (進出口)

Gov Dept ←→ Business (政府採購)

Gov Dept ←→ R-Pool (政府採購)

**流動記錄** - 每一筆流動都產生 Voucher：

- PV (Payment Voucher): Bank Out → 付錢出去

- RV (Receipt Voucher): Bank In → 收錢進來

- JV (Journal Voucher): Non-Bank → 非現金交易

**6.3 23:59pm Return 回收**

每天的最後動作：D-Pool 回收所有未使用的餘額。

**時間點：** 23:59:00 (晚上 11 點 59 分)

**系統自動執行 - System Voucher (SV) 自動產生**

**會計分錄（每個實體視角）**

實體返還未用餘額：

Dr Fund - D-Pool TH 200

Cr Bank (TH) TH 200

**D-Pool 視角**

D-Pool 回收：

Dr D-Pool Bank TH (回收總額)

Cr D-Pool Returned TH (回收總額)

**6.4 Midnight Reset 重置**

23:59:59 → 00:00:00，新的一天開始。

**新 D-Pool 帳號**

舊帳號：DE0001260103 (2026-01-03)

├── Issued: TH 556,000

├── Returned: TH 123,000

├── Net: TH 433,000

└── Status: Closed (已結束)

新帳號：DE0001260104 (2026-01-04)

├── Bank: TH 556,000 (準備發放)

├── Issued: TH 0

├── Returned: TH 0

└── Status: Ready (準備中)

**Balance Equation 驗證**

在重置前，系統自動驗證：

D-Pool Net = R-Pool + FG-Pool (TH) + G-Pool

- 如果不平衡 → 系統警報 → 需要調查

- 如果平衡 → 記錄完成 → 安全重置

**6.5 視覺化：一天的心跳**

D-Pool: DE0001260103

00:00 ──── 日間 ──────── 23:59 ─── 00:00

│ │ │

▼ ▼ ▼

發放 回收 新帳號

(Systole) (Diastole) DE0001260104

心臟收縮 心臟舒張

血液流出 血液回流 新週期

**每一天就是一次心跳。每一天就是一個新的 D-Pool 帳號。D-Pool 是 THOOTB 的心臟。**

**Chapter 7: Voucher System**

**憑單系統**

**7.1 PV: Payment Voucher 付款憑單**

**定義：** Bank Out — 錢從我的帳戶流出

**格式：** PV-260103-0001 (PV + YYMMDD + 序號)

**會計分錄（付款方視角）**

Dr Expense / Asset / Prepayment TH xxx

Cr Bank (TH) TH xxx

**7.2 RV: Receipt Voucher 收款憑單**

**定義：** Bank In — 錢流入我的帳戶

**格式：** RV-260103-0001 (RV + YYMMDD + 序號)

**會計分錄（收款方視角）**

Dr Bank (TH) TH xxx

Cr Revenue / Debtor TH xxx

**7.3 JV: Journal Voucher 轉帳憑單**

**定義：** Non-Bank — 不涉及現金的交易

**格式：** JV-260103-0001 (JV + YYMMDD + 序號)

**會計分錄（視交易類型而定）**

賒銷：

Dr Debtor-Installment TH xxx

Cr Sales (Credit) TH xxx

賒購：

Dr Stock TH xxx

Cr Creditor TH xxx

**7.4 SV: System Voucher 系統憑單**

**定義：** D-Pool 自動產生的憑單

**格式：** SV-260103-0001 (SV + YYMMDD + 序號)

**特性：**

- 只有系統能產生：人類不能手動創建 SV

- 自動執行：時間到就觸發

- 不可修改：一旦產生，無法刪除或更改

**7.5 Voucher ID vs Transaction ID**

**Transaction ID 格式**

20260103093000-P8500000001-B1234567890-300-XYZ789

│ │ │ │ │

│ │ │ │ └── 6位隨機碼

│ │ │ └── 金額

│ │ └── 收款方 (Receiver)

│ └── 付款方 (Payee)

└── 14位時間戳 (YYYYMMDDHHMMSS)

**Voucher 與 Transaction 的關係**

1 Voucher 可能對應 0, 1, 或多個 Transaction

**7.6 Voucher 選擇指南**

Q1: 有沒有錢進出我的 Bank？

├── 有，錢流出 → PV (Payment Voucher)

├── 有，錢流入 → RV (Receipt Voucher)

└── 沒有 → JV (Journal Voucher)

注意：SV 不能手動選擇，只有系統自動產生

**Chapter 8: Journal Rules & Event Integrity**

**日記帳規則與事件完整性**

**8.1 Event Sourcing 事件溯源**

**傳統 vs THOOTB**

傳統：餘額 = TH 5,000 (怎麼來的？不知道)

THOOTB：

Event 1: +1,000 (D-Pool 發放)

Event 2: -300 (買早餐)

Event 3: -200 (搭車)

Event 4: +500 (賣東西)

餘額 = 所有 Events 的總和 = TH 5,000

**8.2 Immutability 不可變性**

**規則**

一旦 Voucher 產生：

❌ 不能刪除

❌ 不能修改

✅ 只能新增「更正 Voucher」

**8.3 Traceability Without Exposure 可追溯但不暴露**

**THOOTB 的解法：分層存取**

- Layer 1: TRD - Write Only

- Layer 2: TAD - Read Only (Aggregate)

- Layer 3: TIAD - Investigate (需授權)

**可追溯 ≠ 被監視。有記錄 ≠ 有人在看。**

**Chapter 9: CPA / CPV as Custodial States**

**CPA / CPV 作為託管狀態**

**9.1 What is CPA / CPV?**

**CPA: Custody Pending Asset**

定義：貨已出，錢未到

例子：

Business A 出口服務給外國客戶

服務已完成，但外匯還沒收到

這筆「應收外匯」就是 CPA

= 我有一筆資產在「託管」中，等待變現

**CPV: Custody Pending Value**

定義：錢已出，貨未到

例子：

Business A 向 FG-Pool 預付進口款

錢已付，但貨還在海上

這筆「預付款」就是 CPV

= 我有一筆價值在「託管」中，等待交貨

**9.2 Why Pending Is Not Failure 為什麼等待不是失敗**

**傳統思維**

傳統：

應收帳款 = 風險

應收越多 = 越危險

要催收！要施壓！

**THOOTB 思維**

THOOTB：

CPA/CPV = 正常的商業狀態

國際貿易本來就需要時間

等待 ≠ 失敗

**時間規則**

\< 24h: Normal (N) ✅ 正常

24-72h: Warning (W) ⚠️ 提醒

\> 72h: Overdue (O) 🔶 需關注

\> 168h: Exception (X) 🔴 需調查

**9.3 Aging Without Punishment 計齡但不懲罰**

**傳統做法**

傳統：

應收帳款超過 90 天 → 計提壞帳 → 損益表虧損 → 財報變難看

結果：

\- 企業為了「好看」而隱藏問題

\- 或者過度催收傷害關係

**THOOTB 做法**

THOOTB：

CPA/CPV 超過 72h → 重分類到 xx99 科目 → 標記「需關注」

不是：

\- 不是「壞帳」

\- 不是「懲罰」

\- 不是「損失」

只是：

\- 「這筆需要注意」

\- 「可能有情況」

\- 「TAD 會追蹤趨勢」

**為什麼不懲罰？**

懲罰的問題：

\- 讓人想隱藏問題

\- 製造恐懼

\- 破壞信任

不懲罰的好處：

\- 問題浮出水面

\- 可以及早處理

\- 維持信任

**9.4 Time as Signal 時間作為信號**

**時間告訴我們什麼**

一筆 CPA 超過 72h：

\- 可能是：外國銀行處理慢

\- 可能是：對方資金周轉

\- 可能是：文件有問題

\- 可能是：真的有問題

時間是「信號」，不是「判決」

**TAD 的角色**

TAD 追蹤：

\- 整體 CPA/CPV 的 aging 分佈

\- 哪些區域/產業的 aging 較長

\- 趨勢是改善還是惡化

TAD 不做：

\- 不點名個別企業

\- 不自動懲罰

\- 不公開細節

**TIAD 介入條件**

只有在：

\- 某實體的 CPA/CPV 明顯異常

\- 且經過授權程序

TIAD 才會：

\- 調查個案

\- 了解原因

\- 提供支持（不是懲罰）

**9.5 CPA/CPV 會計分錄**

**CPA 產生（出口服務）**

服務完成，等待外匯：

Dr CPA-Export (FG-Pool) FC xxx

Cr Service Sales FC xxx

**CPA 結清（收到外匯）**

收到外匯：

Dr Bank (FC) FC xxx

Cr CPA-Export (FG-Pool) FC xxx

**CPV 產生（進口預付）**

預付進口款：

Dr CPV-Import (FG-Pool) TH xxx

Cr Bank (TH) TH xxx

**CPV 結清（收到貨物）**

收到貨物：

Dr Stock / Fixed Assets TH xxx

Cr CPV-Import (FG-Pool) TH xxx

*Part C 完*

**Part D: Governance 治理篇**

**Chapter 10: Human Roles & Separation of Duties**

**人類角色與職責分離**

**10.1 Zone Founder 創辦人**

**角色定位**

Zone Founder = Observer（觀察者）

≠ Controller（控制者）

≠ Owner（擁有者）

**Console 視角**

┌──────────────────────────┐

│ THOOTB Zone Alpha Console │

├──────────────────────────┤

│ D-Pool: TH 556,000 issued / TH 123,000 returned │

│ R-Pool: TH 45,000 │

│ FG-Pool: TH 12,000 (TH) / FC 8,000 (FC) │

│ G-Pool: TH 5,000 │

├──────────────────────────┤

│ Balance Equation: ✅ Balanced │

│ Today's Vouchers: 234 │

│ System Status: 🟢 Active │

└──────────────────────────┘

**10.2 Six Human Departments 六個人類部門**

| **部門** | **全名**         | **主要職責** |
|----------|------------------|--------------|
| RD       | Registry Dept    | 登記註冊     |
| GD       | Governance Dept  | 政策治理     |
| OD       | Operations Dept  | 系統運營     |
| SD       | Simulation Dept  | 模擬測試     |
| StD      | Stewardship Dept | 資源管理     |
| ID       | Interface Dept   | 對外界面     |

**10.3 3T Transparent Departments 三個透明部門**

**核心原則：Separation of Powers**

- TRD: Write Only（只寫）

- TAD: Read Only（只讀）

- TIAD: Investigate（調查）

**三者分離，互相制衡。**

**10.4 權力分離圖**

Zone Founder

(Observer Only)

│

▼

Governance Dept (GD)

│

┌───────┼────────┐

▼ ▼ ▼

RD OD SD

│ │ │

└───────┼───────┘

│

StD + ID

│

▼

┌────────────────────┐

│ 3T Layer │

│ TRD (Write) + TAD (Read) + TIAD │

└────────────────────┘

**Chapter 11: What the System Forbids (Quietly)**

**系統靜靜禁止的事**

**11.1 No Hoarding 無囤積**

每日 23:59pm，所有未用餘額回到 D-Pool。

**11.2 No Arbitrage 無套利**

沒有價差、沒有利潤、沒有累積 = 套利不可能

**11.3 No Invisible Privilege 無隱形特權**

TRD 記錄一切，特權無處藏身

**THOOTB 不靠「禁止」，靠「設計」。好的設計讓壞事不可能，而不是禁止壞事。**

**Chapter 12: SOP for Exceptional Scenarios例外情境標準作業程序**

**12.1 Emergency Release 緊急釋放**

**情境：** 災難發生（地震、洪水、疫情）

**SOP：**

1.  觸發條件 (OD/GD/TAD)

2.  評估 (SD + StD + GD)

3.  決策 (至少 3 部門同意)

4.  執行 (G-Pool → D-Pool)

5.  追蹤 (TAD + StD + GD)

**12.2 External Shocks 外部衝擊**

**情境：** 匯率波動、貿易中斷、供應鏈問題

**應對選項：**

- A: 觀察等待

- B: 調整 FG-Pool 政策

- C: 啟動 G-Pool 緩衝

**12.3 System Pauses 系統暫停**

**情境：** 技術升級、嚴重漏洞、Balance Equation 持續不平衡

**SOP：** 暫停決策 → 公告 → 暫停期間 → 恢復 → 善後

**12.4 Pause / Rollback / Pending-Clear 三層減速器**

**Layer 1: Pause 暫停**

- 觸發：Balance Equation 不平衡、TRD 寫入失敗

- 動作：暫停新交易、保留狀態、通知 OD

**Layer 2: Rollback 回滾**

- 觸發：錯誤交易、系統故障

- 動作：回到安全點、重放事件、標記回滾交易

**Layer 3: Pending-Clear 待清算**

- 觸發：交易有疑問但不確定是錯誤

- 動作：標記、等待人類決定

**12.5 Future Considerations 未來考量**

**Production 版本考慮：**

1.  Approval Flow（人類批准流程）

2.  Alerts（警報系統）

3.  Pause / Rollback（暫停/回滾）

4.  Policy Engine（可配置規則引擎）

**Part D 完**

**Part E: Portal Specifications 門戶規格篇**

**Chapter 13: Console**

**控制台**

**13.1 Console 定位**

Console = Observatory（觀測站）

≠ Workbench（工作台）

≠ Control Panel（控制面板）

Zone Founder 和 OD 使用 Console 來：

- 觀察 4-Pool 狀態

- 驗證 Balance Equation

- 監控系統健康

不能用來：

- 查看個人交易

- 修改任何數據

- 干預實體行為

**13.2 4-Pool Summary 四池總覽**

┌───────────────────────┐

│ Console: Zone Alpha (E0001) │

│ Date: 2026-01-03 Status: 🟢 Active │

├───────────────────────┤

│ ❤️ D-Pool (DE0001260103) │

│ ├── Issued: TH 556,000 │

│ ├── Returned: TH 123,000 │

│ └── Net: TH 433,000 │

│ 🏭 R-Pool │

│ ├── Bank: TH 45,000 │

│ └── Stock: TH 350,000 │

│ 🌐 FG-Pool │

│ ├── Bank (TH): TH 12,000 │

│ ├── Bank (FC): FC 8,000 │

│ ├── CPV-Import: TH 5,000 │

│ └── CPA-Export: FC 3,000 │

│ 🛡️ G-Pool │

│ ├── Reserve: TH 50,000 │

│ └── Premium: TH 2,000 │

└───────────────────────┘

**13.3 System Voucher Controls 系統憑單控制**

┌──────────────────────────┐

│ System Voucher Controls │

├──────────────────────────┤

│ \[🌅 12:00am Allocation\] Status: ✅ Completed │

│ │ Issued to 12 entities │

│ │ Total: TH 556,000 │

│ │ Time: 2026-01-03 00:00:00 │

│ │

│ \[🌙 23:59pm Return\] Status: ⏳ Pending │

│ │ Will execute at 23:59:00 │

│ │ Estimated return: TH ~120,000 │

└──────────────────────────┘

**13.4 Balance Equation Verification 平衡方程式驗證**

┌────────────────────────────┐

│ 📐 Balance Equation（質能守恆定律） │

├────────────────────────────┤

│ D-Pool Net = R-Pool + FG-Pool(TH) + G-Pool │

│ │

│ TH 433,000 = TH 45,000 + TH 12,000 + TH 376,000 │

│ │

│ 433,000 = 433,000 │

│ │

│ Status: ✅ BALANCED │

└────────────────────────────┘

**異常處理**

如果不平衡：Status: ⚠️ UNBALANCED (Difference: TH 1,234)

系統自動：

1.  標記警報

2.  通知 OD

3.  暫停新交易（可選）

4.  記錄到 TRD

**Chapter 14: Citizen Portal**

**公民門戶**

**14.1 Portal 定位**

Citizen Portal = 個人帳戶管理

= Data Entry（數據輸入點）

每個公民：

- 只能看自己的帳戶

- 只能輸入自己的交易

- 不能看其他人

**14.2 Personal Account Display 個人帳戶顯示**

┌───────────────────────┐

│ 👤 Citizen Portal │

│ Name: \[Citizen A\] ID: P8500000001 │

├───────────────────────┤

│ Daily Allocation: TH 1,000 │

│ │

│ ┌────┐ ┌─────┐ ┌─────┐│

│ │ Bank │ │ Traile │ │Net Worth ││

│ │ TH 650 │ │TH 50,000 │ │TH 45,650 ││

│ └────┘ └─────┘ └─────┘│

│ │

│ Net Worth = Bank + Trailer - Creditor │

└───────────────────────┘

**14.3 Data Entry 數據輸入**

**Voucher 按鈕**

\[💳 PV Payment\] \[💰 RV Receipt\] \[📝 JV Journal\]

**14.4 Transaction History 交易記錄**

┌───────────────────────┐

│ 📜 Transaction History \[Filter ▼\]│

├───────────────────────┤

│ 09:30 SV D-Pool Allocation +TH 1,000 │

│ 10:15 PV Buy breakfast -TH 50 │

│ 12:30 PV Buy lunch -TH 80 │

│ 14:00 PV Utility payment -TH 120 │

│ 16:45 PV Shopping -TH 100 │

│ │

│ Today's Spending: TH 350 │

│ Remaining: TH 650 │

└───────────────────────┘

**Chapter 15: Business Portal**

**商家門戶**

**15.1 Portal 定位**

Business Portal = 商業帳戶管理

= Balance Sheet + Trading Account

**15.2 Balance Sheet (Real-time) 資產負債表**

┌────────────── ─────────┐

│ 🏢 Business Portal: Business A │

│ ID: B1234567890 Daily: TH 35,000 │

├────────────────────────┤

│ 📊 Balance Sheet as at 2026-01-03 15:30 │

│ │

│ ASSETS │ LIABILITIES │

│ ──────────┼────────────│

│ Car TH 20,000 │ Creditor TH 0 │

│ Equipment TH 15,000 │ │

│ Stock TH 80,000 │ FUND │

│ Bank (TH) TH 28,500 │ D-Pool TH 178,500 │

│ ──────────┼────────────│

│ Total: TH 178,500 │ Total: TH 178,500 │

└────────────────────────┘

**15.3 Trading Account (Real-time) 損益表**

┌───────────────────────┐

│ 📈 Trading Account as at 2026-01-03 │

├───────────────────────┤

│ SALES TH 50,000 │

│ - COGS (TH 20,000) │

│ - Expenses (TH 5,000) │

│ ──────────────────── │

│ Sales - COGS - Expenses TH 25,000 │

│ 循環成本吸收調整 (TH 25,000) │

│ ──────────────────── │

│ Net TH 0 │

└───────────────────────┘

**Chapter 16: Government Portal**

**政府門戶**

**16.1 Portal 定位**

Government Portal = 9 部門統一入口

= 每個部門獨立帳戶

**16.2 Department Selector 部門選擇器**

┌──────────────────────┐

│ 🏛️ Government Portal │

│ Zone: E0001 Total: TH 320,000 │

├──────────────────────┤

│ 6 Human Departments │

│ ┌──┐ ┌──┐ ┌──┐ │

│ │📋RD││⚖️GD│ │⚙️OD│ │

│ └──┘ └──┘ └──┘ │

│ ┌──┐ ┌──┐ ┌──┐ │

│ │🎮SD││👁StD││🌐ID│ │

│ └──┘ └──┘ └──┘ │

│ │

│ 3T Transparent Departments │

│ ┌──┐ ┌───┐ ┌───┐ │

│ │📝TRD││📊TAD│ │🔍TIAD│ │

│ └──┘ └───┘ └───┘ │

└──────────────────────┘

**Chapter 17: 3T Portal**

**3T 門戶**

**17.1 Portal 定位**

3T Portal = 交易監控與審計

= TRD + TAD + TIAD

三者權限不同：

- TRD: 只看寫入狀態

- TAD: 看統計分析

- TIAD: 調查工具（需授權）

**17.2 TRD: Transaction Record 交易記錄**

┌───────────────────────┐

│ 📝 TRD: Transaction Record │

├───────────────────────┤

│ Write Status: 🟢 Active │

│ Today's Records: │

│ ├── System Vouchers: 24 │

│ ├── Payment Vouchers: 156 │

│ ├── Receipt Vouchers: 89 │

│ └── Journal Vouchers: 45 │

│ Total: 314 vouchers │

│ Storage: 2.3 MB / 100 GB │

│ │

│ ⚠️ TRD cannot read individual details │

└───────────────────────┘

**17.3 TAD: Transaction Analysis 交易分析**

┌───────────────────────┐

│ 📊 TAD: Transaction Analysis │

├───────────────────────┤

│ Today's Statistics: │

│ Total Vouchers: 314 \| Volume: TH 1,234,567 │

│ By Type: │

│ ├── SV: 24 (TH 679,000) │

│ ├── PV: 156 (TH 345,000) │

│ ├── RV: 89 (TH 178,000) │

│ └── JV: 45 (TH 32,567) │

│ Anomaly Detection: │

│ └── CPA/CPV aging: 2 items \> 72h │

│ ⚠️ TAD cannot see individual details │

└───────────────────────┘

**17.4 TIAD: Transaction Investigation 交易調查**

**無授權時**

┌───────────────────────┐

│ 🔍 TIAD: Transaction Investigation │

├───────────────────────┤

│ Current Investigations: 0 │

│ Pending Requests: 1 │

│ │

│ ⚠️ Investigation requires GD approval │

│ ⚠️ Subject will be notified │

└───────────────────────┘

**有授權時**

┌───────────────────────┐

│ 🔍 Investigation \#2026-0001 \[Active\] │

├───────────────────────┤

│ Subject: B1234567890 (Business A) │

│ Reason: CPA \> 168h │

│ Approved by: GD on 2026-01-03 10:00 │

│ Expires: 2026-01-10 10:00 (7 days) │

│ │

│ \[View Transactions\] \[Export\] \[Close Case\] │

│ │

│ ⚠️ All access is logged │

│ ⚠️ Subject has been notified │

└───────────────────────┘

**17.5 3T 權限總結**

| **部門** | **Write** | **Read Agg** | **Read Individual** | **Modify** |
|----------|-----------|--------------|---------------------|------------|
| TRD      | ✅        | ❌           | ❌                  | ❌         |
| TAD      | ❌        | ✅           | ❌                  | ❌         |
| TIAD     | ❌        | ✅           | ✅ (需授權)         | ❌         |

**三者分離，互相制衡。**

**Part E 完**

**Part F: Validation & Future 驗證與未來篇**

**Chapter 18: Test Scenarios**

**測試情境**

**18.1 Daily Cycle Test 每日週期測試**

**測試目標：** 驗證 D-Pool 的「心跳」是否正常

Step 1: 12:00am Allocation

□ 系統自動觸發 SV

□ 所有實體收到正確額度

□ D-Pool Issued = TH 556,000

Step 2: Daytime Transactions

□ 輸入測試交易

□ 驗證 PV/RV/JV 產生正確

□ 驗證 Bank 餘額即時更新

Step 3: 23:59pm Return

□ 系統自動觸發 SV

□ 所有未用餘額回到 D-Pool

□ 所有實體 Bank = 0

Step 4: Balance Equation Verification

□ D-Pool Net = R-Pool + FG-Pool(TH) + G-Pool

□ 如果不平衡，標記警報

**18.2 Voucher Integrity Test 憑單完整性測試**

**Test A: Event Replay** - 重放事件驗證餘額 **Test B: Immutability** - 驗證不能刪除/修改 **Test C: Transaction ID Uniqueness** - 驗證唯一性

**18.3 CPA/CPV Aging Test CPA/CPV 計齡測試**

驗證時間規則：N → W → O → X

**18.4 Portal Access Test 門戶存取測試**

**Test A: Citizen 隔離** - 只能看自己 **Test B: Console 限制** - 不能看個人交易 **Test C: 3T 分離** - 權限正確

**18.5 循環成本吸收調整 Test**

驗證 Self-Audit Mechanism：

- Scenario A: 正常營運（有「利潤」）→ 價格降低

- Scenario B: 異常支出（有「虧損」）→ 價格升高

**Chapter 19: Version History**

**版本歷史**

**19.1 Development Timeline 開發時間線**

| **日期**   | **版本** | **變更**                                |
|------------|----------|-----------------------------------------|
| 2025-12-31 | v1.0     | Initial structure                       |
| 2026-01-01 | v1.1     | Added Console, Balance Equation display |
| 2026-01-01 | v1.2     | Refined D-Pool daily cycle              |
| 2026-01-01 | v1.3     | 6AI Consensus Round 1-5                 |
| 2026-01-02 | v1.4     | Business Portal                         |
| 2026-01-02 | v1.5     | Government Portal                       |
| 2026-01-02 | v1.6     | CPA/CPV mechanism                       |
| 2026-01-02 | v1.7     | 3T Portal refinement                    |
| 2026-01-02 | v1.8     | Console refinement                      |
| 2026-01-02 | v2.0     | Final integration                       |

**19.2 6AI Consensus Records 六AI共識記錄**

**Round 1: Chart of Accounts** (2026-01-01)

- 79 個科目

- CPA/CPV 獨立為 Custody Pending 類別

- 雙幣種支援 (TH + FC)

**Round 2: Journal Entries** (2026-01-01)

- FG-Pool = Gate, not Profit Center

- R-Pool = Warehouse, not Sales

- Revenue 在控制權轉移時確認

**Round 3: Platform Architecture** (2026-01-01)

- Console = Observatory

- Event Sourcing

- 23:59pm = Civilization heartbeat

**Round 4: Transaction ID** (2026-01-02)

- Format: timestamp-Payee-Receiver-Amount-6alphacode

**Round 5: Balance Equation** (2026-01-02)

- D-Pool Net = R-Pool + FG-Pool (TH) + G-Pool

- 名稱：Balance Equation（質能守恆定律）

- 用 Pool 不用 Bank（Copilot 建議）

**Chapter 20: Future Considerations未來考量**

**20.1 v1.1 Planned Updates 計畫更新**

1.  D-Pool 每日新帳號

2.  Balance Sheet 完整結構

3.  Trading Account 完整結構

4.  月末結帳邏輯

**20.2 Production Considerations 生產環境考量**

| **v2.0 Prototype** | **Production Version** |
|--------------------|------------------------|
| React State        | PostgreSQL Database    |
| LocalStorage       | Secure Cloud Storage   |
| No Authentication  | JWT + Role-based Auth  |
| Single User        | Multi-tenant System    |

**20.3 Multi-Layer Governance (GPT 建議)**

**五層治理架構**

- Level 1: Macro Governance 宏觀治理

- Level 2: Sub-Zone / Bureau 分區/局

- Level 3: Account / Transaction 帳戶/交易

- Level 4: Monitoring & Protection 監控與保護

- Level 5: Audit Pyramid 審計金字塔

**20.4 Integration Possibilities 整合可能性**

**與現有系統整合**

- Banking: SWIFT, Open Banking API, CBDC

- Identity: Government ID, DID, Biometric

- Supply Chain: ERP, IoT, Blockchain

**20.5 Research Topics 研究課題**

**經濟模型**

- 最優 Daily Allocation 計算

- 循環成本吸收調整的長期影響

- Zone 規模與穩定性關係

**技術研究**

- Event Sourcing 大規模實現

- 隱私保護計算（零知識證明）

- 分散式 Balance Equation 驗證

**社會研究**

- 無累積經濟的心理影響

- 信任建立機制

- 過渡期管理

**Part F 完**

**Appendix A: Chart of Accounts**

**科目表**

**Version:** v1.0 **Date:** 2026-01-03 **Status:** Reference Only - Subject to change

**1. D-Pool 每日流通池**

帳號格式：D + ZoneCode + YYMMDD (例：DE0001260103)

| **科目**  | **說明**          |
|-----------|-------------------|
| Bank (TH) | 今日可發放總額    |
| Issued    | 已發放明細        |
| Returned  | 已回收明細        |
| Net Flow  | Issued - Returned |

**2. R-Pool 物資記錄池**

| **科目**  | **說明**            |
|-----------|---------------------|
| Bank (TH) | 實體購買後流入的 TH |
| Stock     | 可供應的資源量      |

**3. FG-Pool 金融氣密艙**

| **科目**   | **說明**        |
|------------|-----------------|
| Bank (TH)  | 進口時流入的 TH |
| Bank (FC)  | 出口時流入的 FC |
| CPV-Import | 已付款未收貨    |
| CPA-Export | 已出貨未收款    |

**4. G-Pool 戰略儲備池**

| **科目**          | **說明**             |
|-------------------|----------------------|
| Bank (TH)         | 儲備資金             |
| Premium           | 累積的保障金收入     |
| Emergency Payable | 緊急釋放的待償還金額 |

**5. Citizen 公民帳戶**

帳號格式：P + 10位數字 (例：P8500000001)

| **科目**             | **說明**                  |
|----------------------|---------------------------|
| Bank (TH)            | 當日可用餘額              |
| Trailer              | 分期購買的資產            |
| Creditor-Installment | 分期付款的負債            |
| Net Worth            | Bank + Trailer - Creditor |

**6. Business 商家帳戶**

帳號格式：B + 10位數字 (例：B1234567890)

**6.1 Balance Sheet 資產負債表**

**Assets 資產**

- Car, Furniture, Equipment

- Stock (local/foreign/goods)

- 循環成本吸收調整

- Bank (local/foreign)

- Debtor-installment

**Liabilities 負債**

- Creditor-installment

**Fund 資金**

- D-Pool

**6.2 Trading Account 損益表**

**Sales 銷售收入**

- Sales (credit) - local/foreign

- Service Sales (R-Pool)

**COGS 銷貨成本**

- Opening/Closing Stock

- Purchase from R-Pool

- Factory Overhead

**Expenses 費用**

- Admin, Living, Medical, Utility

**循環成本吸收調整**

**7. Government 政府帳戶**

帳號格式：GOV-XX (例：GOV-RD, GOV-TRD)

**7.1 Six Human Departments**

| **部門** | **額度**   |
|----------|------------|
| GOV-RD   | TH 50,000  |
| GOV-GD   | TH 80,000  |
| GOV-OD   | TH 120,000 |
| GOV-SD   | TH 60,000  |
| GOV-StD  | TH 40,000  |
| GOV-ID   | TH 70,000  |

**7.2 3T Transparent Departments**

| **部門** | **額度**  |
|----------|-----------|
| GOV-TRD  | TH 30,000 |
| GOV-TAD  | TH 25,000 |
| GOV-TIAD | TH 25,000 |

**8. Summary 總結**

| **類別**         | **科目數** |
|------------------|------------|
| D-Pool           | 4          |
| R-Pool           | 2          |
| FG-Pool          | 4          |
| G-Pool           | 3          |
| Citizen          | 4          |
| Business B/S     | ~15        |
| Business Trading | ~15        |
| Government       | 9          |
| **Total**        | **~56**    |

**9. Notes 備註**

- **Reference Only** — 此科目表僅供參考，實際實施時可能調整

- **Code Format** — 科目代碼格式可依 Zone 需求調整

- **Custody Accounts** — CPA/CPV 是特殊的託管狀態帳戶

- **循環成本吸收調整** — 同時出現在 B/S 和 Trading Account

- **Fund vs Equity** — THOOTB 使用 Fund (D-Pool)，不使用 Equity

**Appendix B: Screenshots**

**系統截圖**

**Version:** v1.0 **Date:** 2026-01-03

系統介面截圖請參考 v2.0 實際運行畫面。

主要介面包括：

1.  Console - 4-Pool Summary

2.  Console - System Voucher Controls

3.  Console - Balance Equation Verification

4.  Citizen Portal - Personal Account

5.  Citizen Portal - Data Entry

6.  Business Portal - Balance Sheet

7.  Business Portal - Trading Account

8.  Government Portal - Department Selector

9.  3T Portal - TRD / TAD / TIAD

**Appendix C: Complete Source Code (v2.0)**

**完整源代碼**

**請參考獨立文件：** THOOTB_Zone_Accounting_v2.0_Final.jsx

源代碼包含：

- 所有 Portal 介面

- 4-Pool 邏輯

- Voucher 系統

- Balance Equation 驗證

- 6AI 共識原則頁面

**Part 3 完**

*THOOTB Book 10 Part 3 v1.0* *Part E + Part F (Chapter 13-20) + Appendix A-B* *2026-01-25*
