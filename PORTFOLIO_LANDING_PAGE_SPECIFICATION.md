# FBSF CASH FLOW OPTIMIZATION FUND — DESIGN SPECIFICATION & CONTENT BLUEPRINT

> **Tài liệu đặc tả toàn diện (Comprehensive UI/UX & Content Blueprint)**  
> *Phiên bản chuẩn Fiduciary & Institutional Wealth Management (Cập nhật 2026)*  
> *Mục đích:* Cung cấp chi tiết toàn bộ cấu trúc nội dung, dữ liệu số học, bảng biểu, icon, hành vi tương tác và bảng màu thiết kế của từng section cho AI hoặc UI Designer tái thiết kế giao diện đạt chuẩn Institutional Wealth Management cao cấp nhất (lấy cảm hứng từ Sequoia Capital, Blackstone, Stripe và Linear).

---

## ⚠️ NGUYÊN TẮC BẤT BIẾN & CHỈ THỊ CỐT LÕI (STRICT MANDATES & ZERO-COMPROMISE RULES)

Mọi quá trình tái thiết kế (Redesign), Refactor mã nguồn, hoặc sinh giao diện đều phải tuân thủ nghiêm ngặt 3 nguyên tắc tối thượng sau đây:

### 1. BẢO TOÀN TUYỆT ĐỐI TÊN SECTION VÀ THỨ TỰ (STRICT SECTION PRESERVATION)
* **Giữ nguyên 100% danh mục 10 Section theo đúng thứ tự tuyến tính từ Section 1 đến Section 10:**
  1. `SECTION 1: HEADER & NAVIGATION (NAVBAR)`
  2. `SECTION 2: HERO SECTION (TRANG CHỦ GIỚI THIỆU)`
  3. `SECTION 3: SYSTEM WORKFLOW & FRAMEWORK (QUY TRÌNH HỆ THỐNG)`
  4. `SECTION 4: FINANCIAL PROFILE (HỒ SƠ TÀI CHÍNH GIA ĐÌNH)`
  5. `SECTION 5: RISK ASSESSMENT (ĐO LƯỜNG KHẨU VỊ RỦI RO)`
  6. `SECTION 6: EQUITY SCREENING & ANALYSIS (PHÂN TÍCH CỔ PHIẾU)`
  7. `SECTION 7: MARKOWITZ PORTFOLIO OPTIMIZATION (TỐI ƯU HÓA DANH MỤC MARKOWITZ)` (Phần A: ORP & Phần B: OCP)
  8. `SECTION 8: 6.3. FINANCIAL PLAN AND GOAL IMPLEMENTATION ROADMAP (INVESTMENT PLAN EVALUATION)`
  9. `SECTION 9: INVESTMENT POLICY STATEMENT (IPS) REPORT`
  10. `SECTION 10: FOOTER (CHÂN TRANG)`
* **KHÔNG ĐƯỢC tự ý chèn thêm bất kỳ section mới nào** (ví dụ: Không được tự tiện tạo thêm một section Bento Grid rời ngoài luồng, không chèn banner hay section tính năng trung gian phá vỡ thứ tự).
* **KHÔNG ĐƯỢC xóa bỏ, gộp lại, hoặc đảo lộn vị trí thứ tự** của các section.
* **KHÔNG ĐƯỢC thay đổi Tiêu đề chính (H1, H2, Section Heading), Tiêu đề phụ (Subtitle), và các định danh phần tử (HTML ID)** đã được quy định trong tài liệu này. Mọi thay đổi tùy tiện về tiêu đề (như đổi tiêu đề Hero thành câu khẩu hiệu AI chung chung) đều vi phạm tiêu chuẩn.

### 2. LOẠI BỎ TRIỆT ĐỂ "BADGE VÔ HỒN CÓ HIỆU ỨNG ĐỔ BÓNG, PHÁT SÁNG" (ZERO SOULLESS GLOWING/SHADOWED BADGES)
* **NGHIÊM CẤM MỌI HÌNH THỨC BADGE KIỂU "AI SLOP" VÔ HỒN:**
  * **CẤM** các pill badge tròn trịa dùng gradient neon (tím, hồng, cyan phát sáng).
  * **CẤM** các chấm tròn nhấp nháy phát sáng (pulsing live dots) kiểu radar giả lập.
  * **CẤM** hiệu ứng đổ bóng phát quang (`box-shadow: 0 0 15px rgba(...)`, `box-shadow: 0 10px 25px -5px rgba(...)` mờ ảo lòe loẹt).
  * **CẤM** các badge mang khẩu hiệu tiếp thị rỗng tuếch ("Cutting-edge", "Revolutionary AI", "Seamless synergy").
* **CHUẨN MỰC THAY THẾ (ARCHITECTURAL TYPOGRAPHIC LABELS):**
  * Sử dụng nhãn kiến trúc phẳng tinh tế (Architectural Hairline Overline): Font chữ hoa nhỏ (`0.75rem` / `12px`), khoảng cách ký tự thoáng (`letter-spacing: 0.12em` đến `0.15em`), màu Slate-Sage trung tính (`#52665D`) hoặc Forest Muted (`#4B6358`).
  * Nếu cần hiển thị thẻ dữ liệu / Delta Pill (ví dụ: `+28.4% YoY`, `Moderate`): Chỉ sử dụng thẻ phẳng với viền hairline mảnh `1px solid #E2ECE7`, nền phẳng Alabaster (`#F8FAF9`) hoặc Mint nhạt (`#ECFDF5`), chữ sắc nét, **TUYỆT ĐỐI KHÔNG ĐỔ BÓNG (`box-shadow: none`)** và **KHÔNG HIỆU ỨNG PHÁT SÁNG**.

### 3. CHUẨN MỰC THIẾT KẾ PRIVATE WEALTH INSTITUTIONAL (TIER-1 FIDUCIARY STANDARD)
* **Bảng màu:** Nền Alabaster (`#F8FAF9`) sang trọng, thẻ trắng tinh thể (`#FFFFFF`), đan xen các khối Deep Forest (`#062C1E`) tạo chiều sâu quyền uy mà không gây nặng nề.
* **Đường nét Tactile Hairline:** Đường viền `1px solid #E2ECE7` sắc sảo, lớp phủ micro-grain siêu mờ (`opacity: 0.025`) tạo cảm giác giấy in chứng thư cao cấp.
* **Mật độ chữ tối giản (Ultra-Low Text Density):** Cắt giảm 60–70% văn bản rườm rà. Không để quá 2 dòng mô tả trong một thẻ thông tin, không để quá 3 dòng trong lời dẫn section.
* **Số liệu làm trung tâm (Oversized Tabular Numerals):** Tôn vinh các con số tài chính với kích thước lớn, font `JetBrains Mono` / Tabular Numerals và giải phẫu 3 tầng trực quan.

---

## I. HỆ THỐNG MÀU SẮC & THƯƠNG HIỆU (DESIGN TOKENS & COLOR ARCHITECTURE)

Dự án áp dụng ngôn ngữ thiết kế **Institutional Fiduciary & Private Wealth Management**, lấy cảm hứng từ các quỹ đầu tư định chế hàng đầu thế giới:

### 1. Bảng màu nền & trung tính (Alabaster Canvas & Neutrals)
| Tên Token | Mã HEX / CSS | Vai trò & Mục đích sử dụng |
| :--- | :--- | :--- |
| **Canvas Alabaster** | `#F8FAF9` | Nền chính toàn trang (ấm áp, pha 1% sage thanh lịch) |
| **Pure White** | `#FFFFFF` | Nền các thẻ Card nổi bật, nền bảng biểu, modal |
| **Glass Surface** | `rgba(255, 255, 255, 0.82)` | Bề mặt kính mờ kết hợp `backdrop-filter: blur(16px)` |
| **Section Alt** | `#F1F5F3` | Nền phân cách xen kẽ giữa các section |
| **Hairline Light** | `#E2ECE7` | Đường kẻ viền thẻ 1px, đường phân cách bảng |
| **Primary Ink (Text)** | `#0F1F18` | Màu chữ chính, tiêu đề h1, h2, h3, độ tương phản cao |
| **Muted Slate-Sage** | `#52665D` | Nhãn phụ, caption, overline, đơn vị số liệu |
| **Subtext Muted** | `#64748B` | Mô tả phụ trong các thẻ thông tin |

### 2. Tông xanh định chế uy quyền (Institutional Greens)
| Tên Token | Mã HEX / CSS | Vai trò & Mục đích sử dụng |
| :--- | :--- | :--- |
| **Deep Forest Primary** | `#062C1E` | Màu nền các thẻ tối quyền uy (ORP, Objective, Dark Bento) |
| **Rich Pine Secondary** | `#0B4630` | Màu nút CTA chính, trạng thái hover bề mặt tương tác |
| **Vibrant Emerald** | `#10B981` | Điểm nhấn tăng trưởng, chỉ số dương, active state, mã MWG |
| **Subtle Mint Tint** | `#ECFDF5` | Nền thẻ delta tăng trưởng phẳng, nền highlight tỷ lệ |
| **Deep Forest Border** | `rgba(255, 255, 255, 0.12)` | Đường viền hairline 1px sắc nét trên nền thẻ Deep Forest |

### 3. Màu điểm nhấn tài chính & danh mục cổ phiếu
| Tên Token | Mã HEX | Vai trò & Ứng dụng cụ thể |
| :--- | :--- | :--- |
| **Royal Blue** | `#2563EB` | Màu chỉ số Expected Return OCP, mã GAS, icon xu hướng |
| **Vibrant Blue** | `#3B82F6` | Điểm nhấn Trái phiếu Chính phủ, icon OCP |
| **Purple Accent** | `#7C3AED` | Điểm nhấn mã cổ phiếu SSI trong biểu đồ Donut |
| **Mint Green Accent** | `#10B981` | Điểm nhấn mã VCB, Sharpe Ratio, kết quả Achieved |
| **Warning Gold** | `#F59E0B` | Điểm nhấn tổng 100%, cảnh báo thận trọng (`#FEF3C7` / `#92400E`) |
| **Danger Rose/Red** | `#E11D48` | Màu thâm hụt dòng tiền, nợ vay, kết quả Unachieved |

### 4. Hệ thống Typography chuẩn xác
* **Display / Headline:** `'Newsreader', serif` hoặc `'Plus Jakarta Sans', sans-serif` (độ đậm 700/800, tight tracking `-0.03em`, line-height `1.08`).
* **UI & Body Copy:** `'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif` (300, 400, 500, 600).
* **Số liệu tài chính & Mã cổ phiếu:** `'JetBrains Mono', 'Geist Mono', monospace` kết hợp bắt buộc `font-variant-numeric: tabular-nums` (cho toàn bộ %, VNĐ, ngày tháng, tỷ trọng).

---

## II. ĐẶC TẢ CHI TIẾT NỘI DUNG 10 SECTION (BẢO TOÀN TÊN & THỨ TỰ)

---

### SECTION 1: HEADER & NAVIGATION (NAVBAR)
* **Vị trí & Cơ chế:** Cố định đầu trang (`position: sticky; top: 0; z-index: 1000;`). Chuyển từ trong suốt sang kính mờ Alabaster (`rgba(255, 255, 255, 0.84)`, `backdrop-filter: blur(16px)`, viền dưới `1px solid #E2ECE7`) khi cuộn quá 40px.
* **Thương hiệu (Logo Lockup):**
  * Ảnh Logo: `Logo.png`.
  * Văn bản thương hiệu: `FBS` (Chữ xanh than `#062C1E`, font-weight 800) + `F` (Xanh ngọc `#10B981`).
  * Nhãn phụ đính kèm (Metadata Tag): `FIDUCIARY MPT FUND` (Chữ hoa phẳng, `font-size: 10px`, `letter-spacing: 0.12em`, màu `#52665D`, **không có chấm phát sáng nhấp nháy**).
* **Menu điều hướng tuyến tính (Exact Navigation Links):**
  1. `Overview` (Href: `#system-workflow`)
  2. `Profile` (Href: `#financial-profile`)
  3. `Risk` (Href: `#risk-assessment`)
  4. `Equity` (Href: `#equity-analysis`)
  5. `Portfolio` (Href: `#markowitz`)
  6. `Plan` (Href: `#financial-plan`)
  7. `IPS Report` (Href: `#ips-report`)
* **Nút hành động (CTA):**
  * Nút `Get Started ↗` (Href: `#financial-profile`): Nền `#062C1E`, chữ trắng, hover chuyển nhẹ sang `#0B4630`, mũi tên nghiêng `↗` di chuyển vi mô `translate(2px, -2px)`.

---

### SECTION 2: HERO SECTION (TRANG CHỦ GIỚI THIỆU)
* **ID Section:** `#hero`
* **Nền (Background):** Nền kiến trúc sang trọng kết hợp lưới tọa độ kiến trúc tinh tế (`64px × 64px`, nét hairline `#E2ECE7` mờ nhẹ, có mặt nạ radial mask tan biến dần ra các mép viền).
* **Tiêu đề chính (H1 - BẮT BUỘC GIỮ NGUYÊN VĂN BẢN VÀ CẤU TRÚC):**
  * Dòng 1: `<span className="hero__title-highlight">FBSF Cash Flow</span>`
  * Dòng 2: `<span className="hero__title-line">Optimization Fund</span>`
  * *Typography:* Font chữ lớn uy quyền, tương phản sắc nét giữa Deep Forest `#062C1E` và sắc xanh ngọc `#059669`.
* **Mô tả phụ (Subtitle - BẮT BUỘC GIỮ NGUYÊN VĂN BẢN):**
  * *"A disciplined investment strategy balancing long-term growth, risk management, and financial stability"*
* **Nút kêu gọi hành động (CTAs - BẮT BUỘC GIỮ NGUYÊN):**
  * Nút Primary: `Bắt đầu tư vấn →` (Cuộn mượt đến `#financial-profile`, hiệu ứng hover nền `#0B4630`).
  * Nút Secondary: `Tìm hiểu thêm` (Cuộn mượt đến `#system-workflow`, viền hairline `1px solid #E2ECE7`).
* **Thanh chỉ số ấn tượng (Stats Ribbon Strip - BẮT BUỘC GIỮ NGUYÊN 4 CHỈ SỐ):**
  1. `500+` — **Families Advised** (Nhãn phụ: *High-net-worth accounts*)
  2. `15%` — **Target Annual Return** (Nhãn phụ: *Net IRR under MPT*)
  3. `98%` — **Client Satisfaction** (Nhãn phụ: *Long-term retention*)
  4. `10 Years` — **Fund Experience** (Nhãn phụ: *Audited fiduciary history*)
  * *Quy cách kỹ thuật:* Số hiển thị lớn (`font-size: 2.25rem`, font-weight 700, font `JetBrains Mono` hoặc Grotesque Tabular Nums), có hiệu ứng đếm số `CountUp` mượt mà khi cuộn vào viewport. **TUYỆT ĐỐI KHÔNG dùng badge phát sáng hoặc đổ bóng lòe loẹt xung quanh.**

---

### SECTION 3: SYSTEM WORKFLOW & FRAMEWORK (QUY TRÌNH HỆ THỐNG)
* **ID Section:** `#system-workflow`
* **Cấu trúc bao gồm đúng 5 phân khu con (3A, 3B, 3C, 3D, 3E) xuất hiện theo thứ tự:**

#### 3A. Khung Khái Niệm Đầu Tư (Our Investment Framework)
* **Section Heading:**
  * Tiêu đề: `OUR INVESTMENT FRAMEWORK`
  * Phụ đề: *"FBSF evaluates each client’s financial profile, risk tolerance, investment objectives, and cash flow needs to construct a diversified and optimized portfolio"*
* **Bố cục nội dung:**
  * *3 Taglines kiến trúc:*
    - `01. Analyze comprehensively.`
    - `02. Optimize systematically.`
    - `03. Invest with purpose.`
  * *2 Đoạn văn cô đọng:*
    - Đoạn 1: *"The FBSF system aggregates family financial data, evaluates risk tolerance, screens high-potential equities, and optimizes portfolio allocation through Markowitz Modern Portfolio Theory—automatically generating a professional Investment Policy Statement (IPS)."*
    - Đoạn 2: *"Every step of the framework is rigorously designed to ensure tailored investment recommendations that align seamlessly with each family's unique financial profile and long-term goals."*
  * *Hình ảnh minh họa:* Khung ảnh tư liệu kiến trúc cao cấp, bo góc `16px`, viền hairline `1px solid #E2ECE7`, không dùng hiệu ứng bóng mờ hay hào quang giả tạo.

#### 3B. Quy Trình Tư Vấn 5 Bước (5-Step Advisory Process)
* **Section Heading:**
  * Tiêu đề: `5-STEP ADVISORY PROCESS`
  * Phụ đề: *"From comprehensive financial profiling to institutional IPS delivery — a disciplined end-to-end framework."*
* **Lưới 5 thẻ quy trình (01 - 05) với hình ảnh thực tế và số đục lỗ kiến trúc:**
  1. `01` — **Financial Profiling** (Ảnh: `Financial Profiling.jpg` — Khảo sát tài sản, nợ và cấu trúc chi tiêu)
  2. `02` — **Risk Assessment** (Ảnh: `Risk Assessment.jpg` — Định lượng khẩu vị rủi ro chuẩn GSOEP)
  3. `03` — **Equity Screening** (Ảnh: `Equity Screening.jpg` — Sàng lọc 7 tiêu chí định lượng VN30)
  4. `04` — **Portfolio Optimization** (Ảnh: `Portfolio Optimization.jpg` — Đường biên hiệu quả Markowitz)
  5. `05` — **IPS Report Delivery** (Ảnh: `IPS Report Delivery.jpg` — Xuất văn kiện IPS và lộ trình thực thi)

#### 3C. Lợi Ích Cốt Lõi (Benefits)
* **Section Heading:** `CORE CLIENT BENEFITS`
* **Lưới 6 thẻ lợi ích (Kèm icon SVG monoline kiến trúc, không đổ bóng màu mè):**
  1. `01. Cash Flow Optimization`: Phân tích thu nhập, chi phí, tài sản và nợ để đảm bảo thanh khoản và mục tiêu dài hạn.
  2. `02. Risk Management`: Đánh giá khẩu vị rủi ro và đa dạng hóa tài sản để kiểm soát rủi ro danh mục.
  3. `03. Sustainable Growth`: Tập trung vào các doanh nghiệp tài chính lành mạnh, tiềm năng tăng trưởng bền vững.
  4. `04. Investment Policy Statement`: Chuẩn hóa mục tiêu và hạn mức đầu tư vào văn kiện IPS minh bạch.
  5. `05. Client-Centered Strategy`: Cá nhân hóa danh mục theo hoàn cảnh, chân trời đầu tư và độ tuổi khách hàng.
  6. `06. Optimal Portfolio Construction`: Xác định danh mục rủi ro tối ưu theo Sharpe ratio và kết hợp tài sản phi rủi ro.

#### 3D. Tính Năng Nổi Bật (Key Features)
* **Lưới 4 thẻ tính năng hệ thống:**
  1. `01. Financial & Risk Assessment`: Khảo sát và chấm điểm năng lực rủi ro khoa học.
  2. `02. Equity Screening & Analysis`: Lọc cổ phiếu theo ROE, P/E, P/B, ESG, đòn bẩy nợ.
  3. `03. Portfolio Optimization`: Tối ưu hóa đường biên hiệu quả Markowitz MPT.
  4. `04. Optimal Complete Portfolio`: Kết hợp ORP với Trái phiếu Chính phủ Việt Nam 10 năm.

#### 3E. Lộ Trình Điều Hướng (Interactive Roadmap)
* Danh sách 5 module chuyển hướng nhanh với nhãn trạng thái phẳng (Flat Hairline Tag): `AVAILABLE` / `ACTIVE`, liên kết cuộn tới từng section tương ứng.

---

### SECTION 4: FINANCIAL PROFILE (HỒ SƠ TÀI CHÍNH GIA ĐÌNH)
* **ID Section:** `#financial-profile`
* **Đối tượng hồ sơ thực tế:** Gia đình **Anh Nam & Chị Nữ**.

#### 4A. Thông Tin Thành Viên Gia Đình (Family Members & Context)
* **Section Heading:** `FAMILY FINANCIAL PROFILE`
* **4 Thẻ thành viên chi tiết:**
  * **Anh Nam (Chồng - Trụ cột chính):** Sinh năm 1985 (41 tuổi), Trưởng phòng Kế toán tại PGD Ngân hàng. Thu nhập: `45.000.000 đ/tháng` (`540.000.000 đ/năm`).
  * **Chị Nữ (Vợ - Trụ cột phụ):** Sinh năm 1990 (36 tuổi), Nhân viên Kế toán PGD Ngân hàng. Thu nhập: `20.000.000 đ/tháng` (`240.000.000 đ/năm`).
  * **Bé lớn (Con thứ 1 - Phụ thuộc):** Sinh năm 2014 (12 tuổi), Học sinh cấp 2 Trường Tuệ Đức (Quận 2).
  * **Bé nhỏ (Con thứ 2 - Phụ thuộc):** Sinh năm 2021 (5 tuổi), Học sinh mẫu giáo Trường Vườn Hồng (Quận 2).
* **Bối cảnh thực tế (Fiduciary Context Box):**
  * *Chỗ ở:* Chưa có nhà riêng, đang thuê nhà tại Lương Đình Của, Quận 2 (`20 tr/tháng`).
  * *Bảo hiểm:* Cả hai có BHXH, BHYT nhưng chưa tham gia bảo hiểm nhân thọ (BHNT).
  * *Bố mẹ hai bên:* Đều có lương hưu tự trang trải, chưa cần chu cấp định kỳ.

#### 4B. Mục Tiêu Tài Chính (Financial Goals)
* **Mục tiêu 1 (Trung hạn - 3 năm tới):** `Mua xe hơi`
  * Giá trị mục tiêu: `800.000.000 đ` | Tiến độ tích lũy: `37.5%`
  * Mô tả: Mua xe phục vụ đưa đón các con và đi lại gia đình.
* **Mục tiêu 2 (Dài hạn - 10 năm tới):** `Mua nhà đất`
  * Giá trị mục tiêu: `3.400.000.000 đ` (3.4 tỷ đồng hiện giá) | Tiến độ: `27.9%`
  * Mô tả: Mua nhà đất diện tích khoảng **60m²** tại đường Lê Văn Việt (Quận 9 cũ) để an cư dài hạn.

#### 4C. Bảng Cân Đối Tài Sản & Giá Trị Ròng (Balance Sheet & Net Worth)
* **Tổng tài sản (Total Assets):** `1.400.000.000 đ` (1.4 tỷ đồng)
  * *Phân bổ tài sản (Interactive SVG Donut / Segment Bar):*
    * Tiền mặt & tiền gửi: `300.000.000 đ` (21.4% — `#10B981`)
    * Khoản phải thu (cho mượn): `100.000.000 đ` (7.1% — `#3B82F6`)
    * Bất động sản (Đất nền Bảo Lộc 6x30m): `1.000.000.000 đ` (71.4% — `#062C1E`)
* **Tổng nợ phải trả (Total Liabilities):** `450.000.000 đ` (Vay mua đất Bảo Lộc, lãi suất 10%/năm, thời hạn còn 12 năm, trả gốc & lãi `8.300.000 đ/tháng`).
* **Giá trị tài sản ròng (Net Worth):** `950.000.000 đ` (Tài sản 1.4 tỷ − Nợ 450 triệu).

#### 4D. Báo Cáo Dòng Tiền & Chuẩn Đoán Thâm Hụt (Cash Flow & Expenses)
* **Tổng thu nhập:** `65.000.000 đ/tháng` (`780.000.000 đ/năm`).
* **Tổng chi tiêu:** `73.300.000 đ/tháng` (`879.600.000 đ/năm`).
* **Dòng tiền ròng (Net Cash Flow):** `-8.300.000 đ/tháng` (`-99.600.000 đ/năm` — **THÂM HỤT NẶNG** do áp lực tiền thuê nhà 20M và trả nợ ngân hàng 8.3M).
* **Chi tiết 6 khoản chi phí hàng tháng:**
  1. Tiền thuê nhà: `20.000.000 đ/tháng` (27.3%)
  2. Chi phí giáo dục 2 con: `20.000.000 đ/tháng` (27.3%)
  3. Sinh hoạt thiết yếu gia đình: `15.000.000 đ/tháng` (20.5%)
  4. Trả nợ vay ngân hàng: `8.300.000 đ/tháng` (11.3%)
  5. Giải trí & giao tiếp đối ngoại: `8.000.000 đ/tháng` (10.9%)
  6. Biếu tặng gia đình: `2.000.000 đ/tháng` (2.7%)

---

### SECTION 5: RISK ASSESSMENT (ĐO LƯỜNG KHẨU VỊ RỦI RO)
* **ID Section:** `#risk-assessment`

#### 5A. Phiếu Khảo Sát Khẩu Vị Rủi Ro (10-Question Risk Questionnaire)
Bao gồm 10 câu hỏi trắc nghiệm A, B, C, D (thang điểm 1, 2, 3, 4) dạng accordion hoặc tab trực quan:
1. **Mục tiêu đầu tư ưu tiên:** (A) Bảo toàn vốn (1đ), (B) Thu nhập đều đặn (2đ), (C) Tăng trưởng cân bằng (3đ), (D) Tối đa hóa vốn (4đ).
2. **Phản ứng khi danh mục giảm 20% trong 1 tháng:** (A) Bán hết cắt lỗ ngay (1đ), (B) Bán một phần chuyển sang tiền gửi (2đ), (C) Giữ nguyên chờ hồi phục (3đ), (D) Mua thêm giá thấp (4đ).
3. **Mức độ hiểu biết tài chính:** (A) Chưa có kinh nghiệm (1đ), (B) Biết cơ bản về gửi tiết kiệm (2đ), (C) Hiểu cổ phiếu và quỹ mở (3đ), (D) Chuyên sâu về phái sinh và MPT (4đ).
4. **Tỷ lệ tài sản sẵn sàng đầu tư vào tài sản rủi ro:** (A) < 10% (1đ), (B) 10% – 25% (2đ), (C) 25% – 50% (3đ), (D) > 50% (4đ).
5. **Cơ hội lợi nhuận 50% nhưng có thể mất 30% vốn:** (A) Hoàn toàn không tham gia (1đ), (B) Đắn đo nhưng từ chối (2đ), (C) Phân bổ tỷ trọng nhỏ (3đ), (D) Sẵn sàng nắm bắt (4đ).
6. **Xử lý khi thị trường tài chính biến động mạnh:** (A) Rất lo lắng, mất ngủ (1đ), (B) Theo dõi hàng ngày trong âu lo (2đ), (C) Bình tĩnh xem lại kế hoạch dài hạn (3đ), (D) Xem là cơ hội tái cấu trúc (4đ).
7. **Mức lỗ tối đa chấp nhận được trong 1 năm:** (A) 0% (1đ), (B) Dưới 5% (2đ), (C) 5% – 15% (3đ), (D) Trên 20% (4đ).
8. **Chân trời thời gian đầu tư dự kiến:** (A) Dưới 1 năm (1đ), (B) 1 – 3 năm (2đ), (C) 3 – 7 năm (3đ), (D) Trên 10 năm (4đ).
9. **Tính ổn định của nguồn thu nhập hiện tại:** (A) Rất bấp bênh (1đ), (B) Trung bình, có thể thay đổi (2đ), (C) Khá ổn định (3đ), (D) Rất vững chắc từ ngân hàng (4đ).
10. **Ưu tiên giữa an toàn vốn và sinh lời:** (A) Tuyệt đối an toàn (1đ), (B) An toàn là chính, lời ít (2đ), (C) Cân bằng giữa rủi ro và tăng trưởng (3đ), (D) Tăng trưởng tối đa (4đ).

#### 5B. Kết Quả Chấm Điểm & Phân Loại
* **Điểm số thực tế:** `23 / 34 điểm` (hoặc `26 / 40 điểm` theo thang chuẩn hóa tương đương 65%).
* **Phân loại khẩu vị rủi ro:** `Moderate` (Cân bằng — Nhà đầu tư thận trọng có tính toán).
* **Thang phân loại 5 bậc:**
  1. `Very Conservative` (10 – 14 điểm)
  2. `Conservative` (15 – 19 điểm)
  3. `Moderate` (20 – 24 điểm) — **Khách hàng thuộc nhóm này (Moderate)**
  4. `Growth` (25 – 29 điểm)
  5. `Aggressive Growth` (30 – 34 điểm)

#### 5C. Mô Hình Định Lượng Ngại Rủi Ro GSOEP
* **Chỉ số ngại rủi ro (Risk Aversion Coefficient):** `A = 5.07`
* **Cơ sở khoa học:** Mô hình kinh tế lượng chuẩn GSOEP (German Socio-Economic Panel, Hochmuth et al., 2025) đối chiếu từ điểm số thực tế, độ tuổi 41 của người trụ cột và cấu trúc phụ thuộc của gia đình 2 con nhỏ.

---

### SECTION 6: EQUITY SCREENING & ANALYSIS (PHÂN TÍCH CỔ PHIẾU)
* **ID Section:** `#equity-analysis`

#### 6A. Tiêu Chí Sàng Lọc Cổ Phiếu Định Lượng (Stock Selection Criteria)
* **Section Heading:** `STOCK SELECTION CRITERIA`
* **7 Tiêu chí sàng lọc định lượng khắt khe:**
  1. `Profitability`: `ROE > 15%` (Đảm bảo hiệu quả sinh lời trên vốn chủ sở hữu cao).
  2. `Valuation`: `Forward P/E ≤ 16; P/B < 3` (Định giá hợp lý, biên an toàn cao).
  3. `Financial Health`: `D/E < 0.8; Ngân hàng kiểm soát theo tỷ lệ nợ xấu và CAR` (An toàn bảng cân đối).
  4. `Dividends`: `Stable payout history` (Lịch sử chi trả cổ tức tiền mặt/cổ phiếu đều đặn).
  5. `Liquidity`: `Large-cap, VN30 component` (Thanh khoản cao, dễ dàng tái cơ cấu).
  6. `Exclusions`: `Không đầu tư vào thuốc lá, vũ khí, cờ bạc` (Loại trừ ngành phi đạo đức).
  7. `ESG`: `Quản trị minh bạch và tăng trưởng bền vững` (Bảo vệ lợi ích cổ đông nhỏ).

#### 6B. Phân Tích Danh Mục 5 Mã Cổ Phiếu Lựa Chọn (Selected Stock Analysis)
* **Section Heading:** `SELECTED STOCK ANALYSIS`
* **Bảng thông tin 5 mã cổ phiếu trụ cột:**
  | Ticker | Sector | Role in the Portfolio | Client Needs Met |
  | :--- | :--- | :--- | :--- |
  | **VCB** | Banking | Defensive, stable base | Capital preservation, long-term accumulation |
  | **DHG** | Pharmaceuticals | Defensive, risk reduction | Volatility reduction, value preservation |
  | **GAS** | Energy | Defensive, steady cash flow | Steady cash flow, sector diversification |
  | **MWG** | Retail | Consumer growth | Housing goal and long-term education fund |
  | **SSI** | Securities | Cyclical growth | Capital appreciation in favourable markets |

#### 6C. Đánh Giá Hiệu Suất Cổ Phiếu Chuẩn Hóa (Performance Evaluation)
* **Section Heading:** `PERFORMANCE EVALUATION`
* **Bảng số liệu thống kê chuẩn mực (Font Monospace Tabular Nums):**
  | Mã Ticker | Lợi Nhuận Tháng (Mean) | Độ Lệch Chuẩn Tháng (Std) | Lợi Nhuận Năm (Annualized) | Độ Lệch Chuẩn Năm (Annualized) |
  | :--- | :---: | :---: | :---: | :---: |
  | **VCB** | `0.76%` | `6.48%` | `9.54%` | `22.43%` |
  | **DHG** | `0.35%` | `5.56%` | `4.30%` | `19.26%` |
  | **GAS** | `1.23%` | `12.18%` | `15.76%` | `42.20%` |
  | **MWG** | `1.05%` | `9.44%` | `13.32%` | `32.69%` |
  | **SSI** | `0.92%` | `13.26%` | `11.64%` | `45.93%` |

---

### SECTION 7: MARKOWITZ PORTFOLIO OPTIMIZATION (TỐI ƯU HÓA DANH MỤC MARKOWITZ)
* **ID Section:** `#markowitz`
* **Cấu trúc bao gồm 2 Phần lớn: Phần A (ORP) và Phần B (OCP):**

#### PHẦN A: OPTIMAL RISKY PORTFOLIO (ORP) — 4 TIỂU PHÂN KHU
*(Lưu ý: Đã loại trừ mã DHG do tỷ suất sinh lời kỳ vọng không bù đắp được rủi ro tối ưu MPT).*

##### 1. Optimal Risky Portfolio (Biểu đồ Donut & Bảng Tỷ Trọng)
* **Section Heading:** `OPTIMAL RISKY PORTFOLIO`
* **Thẻ Concept Dark Navy `#062C1E`:** Tiêu đề `Optimal Risky Portfolio`, nhãn `Selected Stocks: VCB, SSI, MWG, GAS`.
* **Biểu đồ Donut SVG tương tác Hover:**
  * `MWG`: **42.0%** (Xanh ngọc `#10B981`)
  * `GAS`: **35.0%** (Xanh hoàng gia `#2563EB`)
  * `VCB`: **12.0%** (Xanh bạc hà `#34D399`)
  * `SSI`: **10.0%** (Tím thạch anh `#7C3AED`)
  * Tâm biểu đồ: Hiển thị `100% ORP` hoặc % chi tiết mã khi rê chuột qua.
* **Bảng phân bổ tài sản thực tế trên tổng tài sản đầu tư:**
  | Mã Tài Sản | Tỷ trọng trong ORP ($w$) | Tỷ trọng trên TỔNG Tài Sản Đầu Tư |
  | :--- | :---: | :---: |
  | **VCB** | `12.00%` | `2.62%` |
  | **SSI** | `10.00%` | `2.12%` |
  | **MWG** | `42.00%` | `8.98%` |
  | **GAS** | `35.00%` | `7.45%` |
  | **Trái phiếu Chính phủ / Tiền gửi** | `—` | `78.84%` |
  | **TỔNG CỘNG KIỂM TRA** | `100.00%` | `100.00%` |

##### 2. Correlation Matrix (Ma Trận Tương Quan 4×4)
* **Section Heading:** `CORRELATION MATRIX`
* **Bảng ma trận hiệp phương sai chuẩn hóa:**
  | Mã | VCB | SSI | MWG | GAS |
  | :--- | :---: | :---: | :---: | :---: |
  | **VCB** | `1.0000` | `0.4304` | `0.2691` | `0.5219` |
  | **SSI** | `0.4304` | `1.0000` | `0.4035` | `0.1073` |
  | **MWG** | `0.2691` | `0.4035` | `1.0000` | `0.2991` |
  | **GAS** | `0.5219` | `0.1073` | `0.2991` | `1.0000` |

##### 3. Portfolio Performance (Hiệu Suất Danh Mục ORP)
* **Section Heading:** `PORTFOLIO PERFORMANCE`
* **Thẻ số liệu 3 chỉ số then chốt:**
  * **Expected Return (Lợi nhuận kỳ vọng):** `1.0628% / tháng` (`12.75% / năm`)
  * **Portfolio Risk (Độ biến động):** `7.6695% / tháng`
  * **Sharpe Ratio:** `0.0824 / tháng` (tương đương `2.41` quy đổi năm)

##### 4. Optimization Objective (Mục Tiêu Tối Ưu Hóa ORP)
* **Section Heading:** `OPTIMIZATION OBJECTIVE`
* **Thẻ kiến trúc Deep Forest:**
  * Tiêu đề: `Optimization Objective`
  * Nội dung: *"Identify the risky portfolio with the highest Sharpe Ratio to balance excess return against portfolio risk."*

---

#### PHẦN B: OPTIMAL COMPLETE PORTFOLIO (OCP) — 4 TIỂU PHÂN KHU ĐỘC LẬP
Mỗi ô dữ liệu được bố trí thành một section con trang nhã, căn giữa (`max-width: 620px`):

##### 1. Optimal Asset Allocation (Phân Bổ Tài Sản OCP)
* **ID Section:** `#ocp-asset-allocation`
* **Section Heading:** `OPTIMAL ASSET ALLOCATION`
* **2 Chỉ số phân bổ cốt lõi:**
  * `21.16%` — **Risky Portfolio (ORP)** (Danh mục 4 cổ phiếu tăng trưởng)
  * `78.84%` — **Risk-free Asset** (Trái phiếu Chính phủ Việt Nam 10 năm)

##### 2. Portfolio Performance (Hiệu Suất Danh Mục OCP)
* **ID Section:** `#ocp-performance`
* **Section Heading:** `PORTFOLIO PERFORMANCE (OCP)`
* **Chỉ số hiệu suất OCP:**
  * **Expected Return:** `0.5653% / tháng` (`6.78% / năm`)
  * **Portfolio Risk:** `1.6232% / tháng` (Độ lệch chuẩn cực thấp nhờ mỏ neo Trái phiếu Chính phủ)

##### 3. Risk Profile (Hồ Sơ Rủi Ro OCP)
* **ID Section:** `#ocp-risk-profile`
* **Section Heading:** `RISK PROFILE`
* **Nội dung:**
  * Phân loại: `Moderate`
  * Hệ số ngại rủi ro: `A = 5.07`
  * Diễn giải: *"Allocation tailored to the family's risk tolerance and long-term financial needs."*

##### 4. Investment Objective (Mục Tiêu Đầu Tư OCP)
* **ID Section:** `#ocp-investment-objective`
* **Section Heading:** `INVESTMENT OBJECTIVE`
* **Nội dung:**
  * Mục tiêu kép: *"Balance long-term growth, risk reduction, and capital preservation."*
  * Cơ chế: *"Combining ORP with a risk-free asset."*

---

### SECTION 8: 6.3. FINANCIAL PLAN AND GOAL IMPLEMENTATION ROADMAP (INVESTMENT PLAN EVALUATION)
* **ID Section:** `#financial-plan`
* **Tiêu đề chính (Section Heading - BẮT BUỘC GIỮ NGUYÊN VĂN BẢN):**
  * Tiêu đề: `INVESTMENT PLAN EVALUATION SHEET`
  * Phụ đề: *"The evaluation shows that the investment plan is fully capable of meeting the 10-year housing goal without relying on financial leverage."*

#### 1. Bảng Đánh Giá Kế Hoạch Đầu Tư (Evaluation Table)
* **Cấu trúc bảng 4 cột:**
  | MỤC TIÊU (GOAL) | GIÁ TRỊ MỤC TIÊU (VND MILLION) | NGUỒN VỐN ĐẠT ĐƯỢC (ACQUIRED CAPITAL) | KẾT QUẢ ĐÁNH GIÁ (RESULT) |
  | :--- | :---: | :---: | :---: |
  | **Vehicle Purchase (Year 3)** | `912.93` | `442.16` | **Unachieved** *(Màu đỏ/rose `#E11D48`)* |
  | **Loan Recovery** | `100.00` | `100.00` | **Achieved** *(Màu xanh ngọc `#10B981`)* |
  | **Housing Purchase (Year 10)** | `5,280.10` | `6,066.96` | **Achieved** *(Màu xanh ngọc `#10B981`)* |

#### 2. Thẻ Chỉ Số Trọng Tâm (Institutional Highlights)
* **10-Year Housing Goal Surplus:** Thặng dư vốn `+786.86M VNĐ` (Tích lũy 6,066.96M so với mục tiêu lạm phát 5,280.10M VNĐ, đạt 114.90% mục tiêu).
* **Zero Financial Leverage:** Khẳng định đạt mục tiêu an cư hoàn toàn bằng sức mạnh lãi kép và kỷ luật dòng tiền, **không cần vay thêm nợ ngân hàng**.
* **Emergency Reserve Bảo Lưu:** Bảo lưu `150M VNĐ` làm quỹ dự phòng thanh khoản khẩn cấp (không đem toàn bộ vốn đi đầu tư).

---

### SECTION 9: INVESTMENT POLICY STATEMENT (IPS) REPORT
* **ID Section:** `#ips-report`
* **Tiêu đề chính (Section Heading - BẮT BUỘC GIỮ NGUYÊN VĂN BẢN):**
  * Tiêu đề: `INVESTMENT POLICY STATEMENT`
  * Phụ đề: *"The Nam–Nu Family · A decade-long strategy for balanced growth and financial security."*
* **Khối Văn Kiện IPS Fiduciary (IPS Document Card):**
  * Mã hiệu lưu trữ văn kiện: `IPS-FBSF-2026-NN01`
  * Dấu xác thực: `FIDUCIARY SEAL APPROVED`
  * **2 Cột thông số điều hành cấp cao:**
    * Cột 1:
      - `Net Worth`: `950.000.000 đ` (Tài sản 1.4B trừ Nợ 450M)
      - `Monthly Net Cash Flow`: Cải thiện từ `-8.3M VNĐ/tháng` (thâm hụt) thành `+3.7M VNĐ/tháng` sau khi tái cơ cấu (Cải thiện ròng `+12.0M VNĐ/tháng`).
    * Cột 2:
      - `Risk Profile`: `Moderate`
      - `Risk Aversion (A)`: `5.07`
  * **Thanh Phân Bổ Danh Mục Khuyến Nghị (OCP Allocation):**
    - `21.16%` ORP Risky Stocks (`VCB`, `SSI`, `MWG`, `GAS`)
    - `78.84%` Vietnam Government Bonds (Risk-free asset)
  * **Thẻ Chiến Lược Đầu Tư (Investment Strategy - Dark Navy `#062C1E`):**
    - Tiêu đề: `Balanced Growth`
    - Tuyên ngôn: *"Balance long-term capital growth with capital preservation while accounting for family expenses, debt obligations, and liquidity needs."*

---

### SECTION 10: FOOTER (CHÂN TRANG)
* **ID Section:** `#footer` hoặc `<footer>`
* **Nội dung thương hiệu:** `FBSF Cash Flow Optimization Fund`
* **Tagline:** *"Disciplined Wealth Architecture & Portfolio Optimization for Modern Families."*
* **Liên kết điều hướng nhanh (Quick Links):** Dẫn chính xác đến từng section từ 1 đến 9.
* **Tuyên bố pháp lý & Miễn trừ trách nhiệm (Regulatory Disclaimer):**
  *"Các phân tích và khuyến nghị tài chính được xây dựng dựa trên dữ liệu kinh tế học định lượng, mô hình Markowitz Modern Portfolio Theory và chuẩn mực khảo sát GSOEP. Báo cáo này phục vụ mục đích tư vấn hoạch định tài sản cá nhân và gia đình, không cấu thành lời mời chào phát hành chứng khoán công chúng."*
* **Bản quyền:** `© 2026 FBSF Fund. All rights reserved.`

---

## III. BẢNG CHECKLIST KIỂM ĐỊNH THIẾT KẾ CHO DEVELOPER & AI

Trước khi bàn giao hoặc triển khai code, hãy kiểm tra danh sách tiêu chuẩn sau:

- [ ] **Thứ tự Section:** Đảm bảo đúng 10 section theo thứ tự 1 → 10, không có section ngoại lai.
- [ ] **Tiêu đề Section:** Tất cả các H1, H2, Subtitle đều chính xác từng từ theo đặc tả.
- [ ] **Không có Badge phát sáng / Đổ bóng:** Mọi thẻ nhãn đều dùng hairline phẳng, không hiệu ứng glow, không pulsing dot, không bóng neon.
- [ ] **Chính xác dữ liệu tài chính:** Tài sản 1.4B, Nợ 450M, Net Worth 950M, Thâm hụt ban đầu -8.3M, Điểm rủi ro 23/34 (hoặc 26/40), Hệ số A = 5.07, ORP (MWG 42%, GAS 35%, VCB 12%, SSI 10%), OCP (78.84% Bond, 21.16% ORP), Thặng dư mua nhà +786.86M VNĐ.
- [ ] **Typography Monospace:** Toàn bộ %, số tiền VNĐ và mã cổ phiếu hiển thị bằng font `JetBrains Mono` với thuộc tính `tabular-nums`.
- [ ] **Độ nhạy Responsive:** Tương thích hoàn hảo từ Mobile (375px), Tablet (768px) đến Desktop (1440px+).
