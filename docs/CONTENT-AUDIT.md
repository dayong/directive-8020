# 官方资料核验与纠错（2026-10-22）

## 资料优先级

1. 游戏官网角色介绍：https://www.thedarkpictures.com/games/directive-8020
2. 当前平台商店：https://store.steampowered.com/app/2255370/Directive_8020/?l=english
3. 当前 PlayStation 页面：https://www.playstation.com/en-us/games/directive-8020/
4. 官方旧公告可用于描述历史状态，不能直接代表当前可用功能。

游戏官网中仍有“在线模式后续更新”的旧文案，而当前 Steam 已列 Online Co-op、PlayStation 已列在线玩家。因此多人页注明平台和查询日期，不继续断言“现在没有在线模式”。商店的 Shared/Split Screen 合并标签不能单独证明同时分屏，也不能证明跨平台联机。

官方周边商店的一篇编辑文章也已检查，但其人物职责、名单与核心官网存在差异；没有据此批量改写章节名或生还路线。资料在官方域名下，也需要核对内容和适用版本。

## 已修正

| 项目 | 原问题 | 当前处理 |
|---|---|---|
| 主角 | Brooke Osmond / Osmond | 活跃人物数据和原文章中的身份引用改为 Brianna Young / Young，保留稳定 ID `young` 与 URL |
| Eisele | Dr. Eisele、Science Officer | 人物数据和重写的人物／演员页面改为 Laura Eisele、Senior Mission Officer；旧场景攻略进入待核验 |
| Cooper | Crew Member、无全名 | Samantha Cooper、Medical Specialist |
| Cernan | Crew Member | Technical Engineer |
| Carter / Simms | Crew Member、列表直接断言固定死亡 | Tomas Carter / Pari Simms、Sleep Technician；人物档案不再把旧布尔默认值当作已核实结局 |
| Mitchell | 无全名、Crew Member | Noah Mitchell、Pilot |
| Williams | Mr. Williams、Crew Member、未经核实的情节断言 | LaMarcus Williams、CEO；人物档案去掉未核实剧情 |
| Anders | 名单遗漏 | 新增 Zoe Anders、Science Officer；保留已有九个 ID 与路径 |
| PC 最低配置 | i5-8400 / Ryzen 1600、RTX 2070 Super、70 GB | i5-8500 / Ryzen 3500、RTX 2060 / RX 5700、40 GB |
| PC 推荐配置 | Ryzen 5600、RTX 3070 | Ryzen 5600X、RTX 3070 Ti；保留 i5-12400F / RX 6800 / 16 GB |
| 在线联机 | 元数据和正文均断言没有在线模式 | 根据当前 Steam、PlayStation 页面重写；跨平台、好友通行证等未核实能力不猜测 |
| 首页 | 真结局固定三步、上线首日、保证全员生还 | 九语言重写为事实型导航首页，不承诺未经证实的解法 |
| 人物详情 | 旧选项和命运称号被当作正式角色资料 | 改为官网身份与职责，暂不渲染未经核实的选择卡片、命运或生还保证 |
| 演员文章 | 错误角色名、未经证明的场景评价 | 英／西语重写为主角身份、职务及查证演职员信息的方法 |

人物资料中保留 Lashana Lynch；Danny Sapani 的配音记录沿用，并与官网周边商店资料核对。其余未独立核验的演职员不猜姓名，显示本语言“所查资料尚未确认”。

## 撤下确定性解法的页面

以下四篇各有英语与西语版本。原 JSON 正文保留作为编辑核验记录，但不再渲染；当前只显示已知事实、撤回说明与官方来源。URL 保留、canonical 指向自身，临时 `noindex, follow`，不进 Sitemap、不输出 hreflang。

- `/who-is-the-real-eisele-directive-8020`：撤回“始终信任新来者”、细胞／恐惧动画判定、不可逆真结局锁定，以及未经证实的第一人称通关经历。
- `/shoot-williams-or-stand-down`：撤回镇静剂制作、奖杯锁定、开枪与放下武器的保证结果。
- `/can-carter-survive`：撤回“任何选择都绝无可能改变死亡”的无条件保证；人物官方介绍本身不足以证明所有路线。
- `/directive-8020-cove`：撤回指定室外岔路方向以及与 Anders 生死的确定联系。

需要得到可复现的实际版本、存档条件、逐场景记录或明确官方攻略后，才能恢复路线与索引。这不等于反向宣称旧路线必然为假；目前证据不足，不能向用户保证。

## 仍待核验

- 八篇章节攻略的章节名、场景顺序、时长与选择统计。
- `choices`、`endings`、`trophies` 旧数据中的保证结果、结局数量、奖杯名和解锁条件。
- 其他旧文章中的密码、收集数量、具体版本差异、补丁历史和特定操作的后果。

这些旧指南已在页面顶部标明具体场景、精确数量与后果仍需核验，不再给未核实 FAQ 和 Save Everyone 步骤输出 FAQ/HowTo 结构化数据。没有把这些内容翻译或复制成新语言索引页。

不能把本记录理解为“整站所有攻略已通过官方核验”。本阶段完成的是明确错误修正、已审正文发布与不可靠解法撤回。


## 后续批次：流程、选择、成就与操作设置

新增核验来源：

- Steam 官方成就页：https://steamcommunity.com/stats/2255370/achievements
- 官方无障碍／玩法风格说明：https://www.thedarkpictures.com/news/directive-8020-accessibility-features

成就页确认 PC 成就数为 30，并以完成全部八章作为一项公开条件，因此“八章”的数量有独立官方依据。但这不能证明旧的章节副标题、场景安排、精确时长，也不能推算 PlayStation 奖杯数。

官方无障碍说明将 Explorer／Survivor 放在 PLAY STYLE，而不是 DIFFICULTY。Explorer 可在故事中使用 Turning Points；Survivor 首轮不能通过该功能回退，到达结局后才解锁。操作难度是 Forgiving／Challenging／Lethal／Custom 及对应单项设置。取消 QTE 时限仅限 Solo Story，按错输入仍会失败。

已据此发布九语言的四类正文：

- `/trophies`：按平台查证、收集规划和排错方法；明确 Steam 的 30 项并非 PS 奖杯总数，不再渲染旧的未经核实名称、等级、白金保证或所谓真结局奖杯。
- `/directive-8020-skill-checks`：操作设置、QTE、格挡、威胁提示、阅读选项和玩法风格的准确区分；不再给非公开的技能检定公式编造结果。
- `/walkthrough`：流程准备和八章导航；移除声称三次实测的第一人称经历、按章节保证某个结果的速查表，明确链接中的旧章节正文仍待核验。
- `/choices`：官方回退规则和可复现选择记录方法；旧的互动预测和“永久锁死／无解”表格已撤下，原组件及旧 JSON 保留在代码／archive 中，不作为已验证功能展示。

以上旧英／西语稿保存在 `content/archive/<locale>/`，不参与路由、Sitemap 或内容语言可用性判断。其他语言均为完整新稿，没有从旧未核实解法生成译文。

新增三类临时核验页（各英／西语，共六页）：`/all-endings`、`/save-everyone`、`/codes`。旧的十结局表、固定全员生还路线和具体密码不再作为保证解法渲染；原 URL、旧资料与核验说明保留，临时 noindex，并移出 Sitemap／hreflang。加上前批四类，目前共十四个临时核验 URL。

仍待解决：八篇章节正文的逐场景实测、确切结局条件、密码与收集路线、平台奖杯解锁条件。官方没有公开的细节不能只靠翻译补全，也不能以反向猜测代替旧稿。


## 后续批次：多人、版本购买与收集品

三类页面各自完成九语言正文、摘要与 SEO 文案。旧英／西语稿归档到 `content/archive/<locale>/`；归档不参与路由或 Sitemap。

- `/multiplayer`：逐平台列出当前能力，不从 Steam 的合并分类推断同时分屏，不把 PS5 在线支持推断为所有平台支持跨平台匹配。PS5 在线 PS Plus 要求与 Xbox 本地 2–5 人分别注明。
- `/directive-8020-buy`：区分完整游戏、Digital Deluxe 和 Steam 升级包；升级包需要本体。未固定易变价格、库存或最低价。保留原 Instant Gaming PC 推广参数、推广披露与视频预览，撤下未经核实的其他商家商品和每月复查承诺。日语正文明确网站支持日语不代表 Steam 游戏支持日语。
- `/collectibles`：说明官方豪华附加内容、如何分开记录基础游戏与附加收集进度；撤下旧 65 件总数及未经核实的房间位置。当前是收集准备指南，不是全物品位置图。

新增主要核验入口：

- Xbox：https://www.xbox.com/en-US/games/store/directive-8020/9pf9qdh98k8l
- Steam 升级包：https://store.steampowered.com/app/3883930/Directive_8020__Digital_Deluxe_Upgrade/
- Steam 本体：https://store.steampowered.com/app/2255370/Directive_8020/
- PlayStation：https://www.playstation.com/en-us/games/directive-8020/
- 保留的第三方 PC 商品：https://www.instant-gaming.com/en/10380-buy-directive-8020-pc-steam/

购买与平台页面核对日期为 2026-10-22。后续商店变化需重新核验；页面不承诺自动更新。其余逐场景条件仍待核验。


## 后续批次：时长、演员与 PC 排查

三类各有九语言正文，旧英／西语稿归档。时长页不再展示未经证实的固定首轮、全结局、全收集小时数，也不再使用旧章节时间表或 65 件收集品推算时长。官方无障碍资料用来核对玩法风格和回退功能，而不是充当实际通关时间测试。

演员页使用官网已确认的主角身份与背景，说明语音、动作捕捉、肖像和本地化配音需要分别查证，不猜完整演员名单。

故障页的旧 Steam 新闻链接本次未获取到可核实正文，故撤下对其日期、具体平台修复效果的确定转述，而不是反向宣称该补丁不存在。移除 DX11 启动参数、Game Pass 安装暗示、通过 Turning Points 保证恢复损坏存档及跨平台帧率模式保证。新稿仅列官方 PC 配置、Steam 验证文件流程与一般诊断／保留备份方法，不声称实测解决了特定崩溃。

核验入口：

- 官方人物与功能：https://www.thedarkpictures.com/games/directive-8020
- 官方玩法风格：https://www.thedarkpictures.com/news/directive-8020-accessibility-features
- PC 配置：https://store.steampowered.com/app/2255370/Directive_8020/
- Steam 文件验证：https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB
- 当前公告入口：https://store.steampowered.com/news/app/2255370

隐私页的语言偏好 localStorage 披露、GA4 与环境配置 Umami 的描述需要更新。后台保留期无法从代码推断，旧稿的固定 14 个月与笼统不收集个人数据结论不能直接作为已审事实扩散到新语言。


## 后续批次：章节正文撤回与隐私说明

旧章节正文含无法复现的第一人称通关经历、无条件必死结论、精确收集位置与后果。仅显示 needs-review 提醒不足以把这些内容当作可靠指南。因此现有英／西语八章分别设 pending，共十六个 URL；正文原文件保留，但当前页面只展示章节自己的核验说明，Metadata 与面包屑使用中性章节编号，不再输出未核实副标题。

审核记录在 `content/reviews/<locale>/episodes/<id>.json`，与共享视图模板分开。各语言各篇可以独立复核后恢复索引。当前共三十个临时 noindex 核验 URL（前批十四个专题加本批十六个章节），不新增其他语言的薄内容副本。

隐私政策按仓库实际行为重写九语言。纠正缺失的 localStorage 披露、笼统无个人数据结论、固定 GA4 保留期，以及把 Do Not Track 当作已验证退出方式的表述；保留条件性的隐私请求与联系渠道。不推断 Analytics 后台保留配置，也不声明法律合规已完成。

服务商来源：

- Google GA4 Cookie：https://support.google.com/analytics/answer/11397207
- Google 保留设置：https://support.google.com/analytics/answer/7667196
- Google 政策：https://policies.google.com/privacy
- Umami：https://docs.umami.is/docs/collect-data
- Cloudflare：https://www.cloudflare.com/privacypolicy/

本批没有改变统计脚本、同意管理或商业链接的行为；内容说明更新不能替代这些独立功能的审核。


## 后续批次：十位船员完整档案

依据官网 The Cassiopeia Crew 人物介绍，补写全部十位船员的九语言正文。以概述方式说明职业经历、动机和人物关系，不复制官方对白，不将剧情背景当作解法。

- Young：驾驶员身份、飞行训练、Bill Young 及 Stafford 的关系；Lashana Lynch 的官方表演身份。
- Stafford：指挥官与火星经历、退休前任务、与 Bill／Brianna Young 的关系；不把保护承诺解释为任何路线的生还保证。
- Eisele：高级任务官、任务设计、Cassiopeia／Oracle 及沟通特点；这些性格不是辨认模仿者的可靠判据。
- Cernan：工程学习、人生观、已故伴侣带来的任务动机；不依据乐观推导固定成功操作。
- Cooper：军方医疗后送、Jessops Station 的任务前经历、与 Anders 的友谊及推荐；任务前幸存不等于游戏中的结局。

来源：https://www.thedarkpictures.com/games/directive-8020

新稿独立储存 meta、sections、review，未用共享模板或短目录摘要伪装完成翻译。Carter、Simms、Williams、Mitchell、Anders 的独立九语言详情也已补齐；不再依赖只含一句介绍的目录摘要。原有角色 ID 与英／西语 URL 保留。

补充核对：Carter／Simms 的休眠技术职责、家庭与个人兴趣；Mitchell 的模拟训练及与 Young／Stafford 的关系；Anders 接替 George McNamara 的科学官岗位及与 Cooper 的友谊；Williams 的企业背景与公开理念。所有内容均限于官方介绍，不用人物背景推断剧情正确选项。


## 2026-10-26：结局页审核完成范围

`/all-endings` 与 `/es/all-endings` 现在发布有来源的结果／回退指南，旧稿保存在 content/archive。核对 Steam 公开的 Home Free、Paint The Walls、Message in a Bottle 条件，明确这些成就不等同于完整结局目录，也不能据此推出所有步骤。Explorer／Survivor 的说明仍按官方无障碍文章，不写为操作难度。

这两页改为 verified 并恢复索引资格，仅表示新正文所列事实已审核，不表示旧十结局表或所有场景解法得到确认。其他待核验文章／章节未放开。来源为 Steam 官方成就页及 The Dark Pictures 无障碍说明，检查日期 2026-10-26。
