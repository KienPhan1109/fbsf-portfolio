# FBSF CASH FLOW OPTIMIZATION FUND — DESIGN SPECIFICATION & CONTENT BLUEPRINT

> **Tài liệu đặc tả toàn diện (Comprehensive UI/UX & Content Blueprint)**
> *Mục đích:* Cung cấp chi tiết toàn bộ cấu trúc nội dung, dữ liệu số học, bảng biểu, icon, hành vi tương tác và bảng màu thiết kế của từng section cho AI hoặc UI Designer tái thiết kế giao diện đạt chuẩn Institutional Wealth Management cao cấp nhất.

---

## I. HỆ THỐNG MÀU SẮC DỰ ÁN (DESIGN COLOR PALETTE & TOKENS)

Dự án sử dụng ngôn ngữ thiết kế **Institutional Wealth Management / Private Banking**, kết hợp giữa nền trắng sạch hiện đại, tông than chì (Charcoal Slate), xanh ngọc lục bảo (Emerald Green) thể hiện sự thịnh vượng bền vững, cùng các điểm nhấn màu tài chính chuyên sâu.

### 1. Bảng màu chính (Brand & Neutrals)
| Tên Token / Màu | Mã HEX | Vai trò & Mục đích sử dụng |
| :--- | :--- | :--- |
| **White** | `#FFFFFF` | Nền chính trang, nền card trắng sáng, văn bản trên nền tối |
| **Off-White / Slate-50** | `#F8FAFC` | Nền section xen kẽ (`section--alt`), nền card thứ cấp |
| **Ghost White** | `#F1F5F9` | Nền đường viền bảng, thanh tiến trình, hover background |
| **Border Gray** | `#E2E8F0` | Đường kẻ hairline viền card, bảng phân cách |
| **Muted Text / Slate-400** | `#94A3B8` | Nhãn phụ, mô tả phụ, text phụ trên card tối |
| **Subtext / Slate-500** | `#64748B` | Mô tả phụ, sublabel của card chỉ số |
| **Body Text / Slate-700** | `#334155` | Nội dung văn bản thường, chi tiết thông tin |
| **Heading Dark / Slate-900** | `#0F172A` | Tiêu đề chính h1, h2, h3, số liệu quan trọng |
| **Deep Charcoal** | `#18181B` | Tông than chì cao cấp dùng cho text gradient |

### 2. Bảng màu tối sang trọng (Dark Navy Cards)
| Tên Token / Màu | Mã HEX | Vai trò & Mục đích sử dụng |
| :--- | :--- | :--- |
| **Dark Navy Deep** | `#0B132B` | Nền card ORP Concept, Optimization Objective, OCP Dark Cards |
| **Dark Navy Border** | `rgba(255, 255, 255, 0.1)` | Viền kính mờ trên card nền tối |
| **Dark Navy Chip** | `#1E293B` | Nền badge mã cổ phiếu (VCB, SSI, MWG, GAS) trên card tối |

### 3. Màu điểm nhấn tài chính & danh mục (Accent & Financial Colors)
| Tên Token / Màu | Mã HEX | Vai trò & Mục đích sử dụng |
| :--- | :--- | :--- |
| **Emerald Accent (Chủ đạo)** | `#059669` | Màu nút CTA chính, viền active, giá trị Sharpe Ratio, mã MWG |
| **Emerald Light** | `#10B981` | Tiêu đề bảng phân bổ, mã VCB, điểm nhấn tích cực |
| **Emerald Soft Bg** | `#ECFDF5` | Nền highlight badge tích cực, pill tăng trưởng |
| **Royal Blue** | `#2563EB` | Màu chỉ số Expected Return OCP, mã GAS |
| **Vibrant Blue** | `#3B82F6` | Icon OCP (Pie chart, Trending, Shield, Target) |
| **Purple Accent** | `#7C3AED` | Điểm nhấn mã cổ phiếu SSI trong biểu đồ Donut |
| **Amber / Gold** | `#F59E0B` | Điểm nhấn cảnh báo nhẹ, highlight tổng 100% (`#FEF3C7` / `#92400E`) |
| **Danger / Red** | `#EF4444` | Màu chỉ số thâm hụt dòng tiền, nợ vay, chi phí rủi ro |

### 4. Typography
- **Font chữ giao diện chính:** `'Inter', -apple-system, sans-serif` (300, 400, 500, 600, 700, 800)
- **Font số liệu tài chính & Monospace:** `'JetBrains Mono', 'Fira Code', monospace` (Dùng cho toàn bộ số %, tỷ đồng, bảng thống kê, mã ticker)

---

## II. ĐẶC TẢ CHI TIẾT NỘI DUNG TỪNG SECTION

---

### SECTION 1: HEADER & NAVIGATION (NAVBAR)
- **Vị trí:** Cố định đầu trang (Sticky / Fixed Glassmorphism).
- **Thương hiệu (Logo):**
  - Hình ảnh logo: `Logo.png`.
  - Brand Text: `FBS` (chữ xanh than) + `F` (xanh ngọc accent).
- **Menu điều hướng:**
  1. `Overview` (Href: `#system-workflow`)
  2. `Profile` (Href: `#financial-profile`)
  3. `Risk` (Href: `#risk-assessment`)
  4. `Equity` (Href: `#equity-analysis`)
  5. `Portfolio` (Href: `#markowitz`)
  6. `Plan` (Href: `#financial-plan`)
- **Nút CTA:** Nút `Get Started` (Href: `#financial-profile`).

---

### SECTION 2: HERO SECTION (TRANG CHỦ GIỚI THIỆU)
- **Nền (Background):** Ảnh kiến trúc `background.jpg` phủ lớp phủ gradient mờ kết hợp 3 hình khối tròn mờ (`aura circles`).
- **Tiêu đề chính (H1):**
  - Dòng 1: `FBSF Cash Flow` (Gradient xanh ngọc sang đen than chì).
  - Dòng 2: `Optimization Fund`.
- **Mô tả phụ (Subtitle):**
  - *"A disciplined investment strategy balancing long-term growth, risk management, and financial stability"*
- **Nút kêu gọi hành động (CTAs):**
  - Nút Primary: `Bắt đầu tư vấn →` (Cuộn đến `#financial-profile`).
  - Nút Secondary: `Tìm hiểu thêm` (Cuộn đến `#system-workflow`).
- **Thanh chỉ số ấn tượng toàn màn hình (Stats Ribbon Strip):**
  - `500+` — Families Advised
  - `15%` — Target Annual Return
  - `98%` — Client Satisfaction
  - `10 Years` — Fund Experience
  *(Các số có hiệu ứng đếm số chuyển động CountUp khi cuộn tới).*

---

### SECTION 3: SYSTEM WORKFLOW & FRAMEWORK (QUY TRÌNH HỆ THỐNG)

Phần này bao gồm 5 màn hình con:

#### 3A. Khung Khái Niệm Đầu Tư (Our Investment Framework)
- **Section Heading:**
  - Tiêu đề: `OUR INVESTMENT FRAMEWORK`
  - Phụ đề: *"FBSF evaluates each client’s financial profile, risk tolerance, investment objectives, and cash flow needs to construct a diversified and optimized portfolio"*
- **Nội dung bên trái:**
  - Tagline 3 dòng:
    `Analyze comprehensively.`
    `Optimize systematically.`
    `Invest with purpose.`
  - Đoạn văn 1: *"The FBSF system aggregates family financial data, evaluates risk tolerance, screens high-potential equities, and optimizes portfolio allocation through Markowitz Modern Portfolio Theory—automatically generating a professional Investment Policy Statement (IPS)."*
  - Đoạn văn 2: *"Every step of the framework is rigorously designed to ensure tailored investment recommendations that align seamlessly with each family's unique financial profile and long-term goals."*
- **Hình ảnh bên phải:** Khung ảnh nghệ thuật `introImg` (`1791220049300...jpg`) với hiệu ứng hào quang Aura Blob.

#### 3B. Quy Trình Tư Vấn 5 Bước (5-Step Advisory Process)
- **Section Heading:**
  - Tiêu đề: `5-STEP ADVISORY PROCESS`
  - Phụ đề: *"From comprehensive financial profiling to institutional IPS delivery — a disciplined end-to-end framework."*
- **Lưới 5 thẻ Bento Card có hình nền thực tế & số đục lỗ (01 - 05):**
  1. `01` — **Financial Profiling** (Ảnh: `Financial Profiling.jpg`)
  2. `02` — **Risk Assessment** (Ảnh: `Risk Assessment.jpg`)
  3. `03` — **Equity Screening** (Ảnh: `Equity Screening.jpg`)
  4. `04` — **Portfolio Optimization** (Ảnh: `Portfolio Optimization.jpg`)
  5. `05` — **IPS Report Delivery** (Ảnh: `IPS Report Delivery.jpg`)

#### 3C. Lợi Ích Cốt Lõi (Benefits)
- **Section Heading:** `CORE CLIENT BENEFITS`
- **Lưới 6 thẻ lợi ích (Kèm icon SVG monoline chuyên nghiệp):**
  1. `01. Cash Flow Optimization`: Phân tích thu nhập, chi phí, tài sản và nợ để đảm bảo thanh khoản và mục tiêu dài hạn.
  2. `02. Risk Management`: Đánh giá khẩu vị rủi ro và đa dạng hóa tài sản để kiểm soát rủi ro danh mục.
  3. `03. Sustainable Growth`: Tập trung vào các doanh nghiệp tài chính lành mạnh, tiềm năng tăng trưởng bền vững.
  4. `04. Investment Policy Statement`: Chuẩn hóa mục tiêu và hạn mức đầu tư vào văn kiện IPS minh bạch.
  5. `05. Client-Centered Strategy`: Cá nhân hóa danh mục theo hoàn cảnh, chân trời đầu tư và độ tuổi khách hàng.
  6. `06. Optimal Portfolio Construction`: Xác định danh mục rủi ro tối ưu theo Sharpe ratio và kết hợp tài sản phi rủi ro.

#### 3D. Tính Năng Nổi Bật (Key Features)
- **Lưới 4 thẻ tính năng:**
  1. `01. Financial & Risk Assessment` (Khảo sát và chấm điểm năng lực rủi ro)
  2. `02. Equity Screening & Analysis` (Lọc cổ phiếu theo ROE, P/E, P/B, ESG, nợ vay)
  3. `03. Portfolio Optimization` (Tối ưu hóa đường biên hiệu quả Markowitz)
  4. `04. Optimal Complete Portfolio` (Kết hợp ORP với Trái phiếu Chính phủ Việt Nam 10 năm)

#### 3E. Lộ Trình Điều Hướng (Interactive Roadmap)
- Thẻ danh sách 5 module có trạng thái `Available` / `Upcoming` dẫn link cuộn nhanh đến từng khu vực.

---

### SECTION 4: FINANCIAL PROFILE (HỒ SƠ TÀI CHÍNH GIA ĐÌNH)

Dữ liệu thực tế của gia đình mẫu: **Anh Nam & Chị Nữ**.

#### 4A. Thông Tin Thành Viên Gia Đình (Family Members & Context)
- **Section Heading:** `FAMILY FINANCIAL PROFILE`
- **4 Thẻ thành viên:**
  - **Anh Nam (Chồng - Trụ cột chính):** Sinh năm 1985 (41 tuổi), Trưởng phòng Kế toán tại PGD Ngân hàng. Thu nhập: `45.000.000 đ/tháng` (`540.000.000 đ/năm`).
  - **Chị Nữ (Vợ - Trụ cột phụ):** Sinh năm 1990 (36 tuổi), Nhân viên Kế toán PGD Ngân hàng. Thu nhập: `20.000.000 đ/tháng` (`240.000.000 đ/năm`).
  - **Bé lớn (Con thứ 1 - Phụ thuộc):** Sinh năm 2014 (12 tuổi), Học sinh cấp 2 Trường Tuệ Đức (Quận 2).
  - **Bé nhỏ (Con thứ 2 - Phụ thuộc):** Sinh năm 2021 (5 tuổi), Học sinh mẫu giáo Trường Vườn Hồng (Quận 2).
- **Thông tin bổ sung (Context Banner):**
  - *Chỗ ở:* Chưa có nhà riêng, đang thuê nhà tại Lương Đình Của, Quận 2 (`20 tr/tháng`).
  - *Bảo hiểm:* Cả hai có BHXH, BHYT nhưng chưa có bảo hiểm nhân thọ (BHNT).
  - *Bố mẹ hai bên:* Đều có lương hưu tự trang trải, chưa cần chu cấp định kỳ.

#### 4B. Mục Tiêu Tài Chính (Financial Goals)
- **Mục tiêu 1 (Trung hạn - 3 năm tới):** `Mua xe hơi`
  - Giá trị mục tiêu: `800.000.000 đ`
  - Tiến độ hiện tại: `37.5%`
  - Mô tả: Mua xe hơi 800 triệu để thuận tiện đưa đón các con đi học.
- **Mục tiêu 2 (Dài hạn - 10 năm tới):** `Mua nhà đất`
  - Giá trị mục tiêu: `3.900.000.000 đ` (3.9 tỷ đồng)
  - Tiến độ hiện tại: `24.4%`
  - Mô tả: Mua nhà đất diện tích khoảng **70m²** tại đường Lê Văn Việt (Quận 9 cũ) để ổn định nơi ở lâu dài.

#### 4C. Bảng Cân Đối Tài Sản & Giá Trị Ròng (Balance Sheet & Net Worth)
- **Tổng tài sản (Total Assets):** `1.400.000.000 đ` (1.4 tỷ đồng)
  - Biểu đồ Donut phân bổ tài sản:
    - Tiền mặt & tiền gửi: `300.000.000 đ` (21.4% - Xanh ngọc `#10B981`)
    - Khoản phải thu (cho mượn): `100.000.000 đ` (7.1% - Xanh dương `#3B82F6`)
    - Bất động sản (Đất nền Bảo Lộc 6x30m): `1.000.000.000 đ` (71.4% - Xanh than `#0A1628`)
- **Tổng nợ phải trả (Total Liabilities):** `450.000.000 đ` (Dư nợ vay mua đất Bảo Lộc, lãi suất 10%/năm, còn 12 năm, trả nợ `8.300.000 đ/tháng`).
- **Giá trị tài sản ròng (Net Worth):** `950.000.000 đ` (Tài sản 1.4 tỷ - Nợ 450 triệu).

#### 4D. Báo Cáo Dòng Tiền & Chi Phí (Cash Flow & Expenses)
- **Tổng thu nhập:** `65.000.000 đ/tháng` (`780.000.000 đ/năm`).
- **Tổng chi tiêu:** `73.300.000 đ/tháng` (`879.600.000 đ/năm`).
- **Dòng tiền ròng (Net Cash Flow):** `-8.300.000 đ/tháng` (`-99.600.000 đ/năm` - **Thâm hụt** do gánh nặng nợ vay và tiền thuê nhà).
- **Cơ cấu chi phí sinh hoạt (Bar Chart):**
  1. Chi phí thuê nhà: `20.000.000 đ/tháng` (27.3%)
  2. Chi phí giáo dục 2 con: `20.000.000 đ/tháng` (27.3%)
  3. Sinh hoạt thiết yếu: `15.000.000 đ/tháng` (20.5%)
  4. Trả nợ vay ngân hàng: `8.300.000 đ/tháng` (11.3%)
  5. Giải trí & giao tiếp: `8.000.000 đ/tháng` (10.9%)
  6. Biếu tặng đối ngoại: `2.000.000 đ/tháng` (2.7%)

---

### SECTION 5: RISK ASSESSMENT (ĐO LƯỜNG KHẨU VỊ RỦI RO)

#### 5A. Phiếu Khảo Sát Khẩu Vị Rủi Ro (Risk Questionnaire)
- Gồm **10 câu hỏi trắc nghiệm A, B, C, D** dạng accordion trực quan (mỗi lựa chọn có điểm tương ứng 1, 2, 3, 4).
- Các câu hỏi bao gồm: Mục tiêu đầu tư, phản ứng khi danh mục giảm 20%, mức độ hiểu biết tài chính, tỷ lệ tài sản sẵn sàng đầu tư, phản ứng trước cơ hội lợi nhuận cao rủi ro lớn, cách xử lý khi thị trường biến động mạnh, mức lỗ tối đa có thể chấp nhận, thời gian đầu tư dự kiến, tính ổn định thu nhập, ưu tiên giữa an toàn và sinh lời.

#### 5B. Kết Quả Chấm Điểm & Phân Loại (Risk Scoring & Classification)
- **Điểm số của khách hàng:** `23 / 34 điểm`
- **Xếp loại khẩu vị rủi ro:** `Moderate` (Cân bằng / Thận trọng vừa phải).
- **Thang đo 5 mức độ rủi ro chuẩn hóa:**
  1. *Very Conservative* (10 - 14 điểm)
  2. *Conservative* (15 - 19 điểm)
  3. *Moderate* (20 - 24 điểm) — **Khách hàng thuộc nhóm này (23 điểm)**
  4. *Growth* (25 - 29 điểm)
  5. *Aggressive Growth* (30 - 34 điểm)

#### 5C. Mô Hình Định Lượng Ngại Rủi Ro GSOEP (Risk Aversion Model)
- **Chỉ số ngại rủi ro (Risk Aversion Coefficient):** `A = 5.07`
- Căn cứ theo mô hình kinh tế lượng chuẩn GSOEP (German Socio-Economic Panel) đối chiếu độ tuổi (41), trình độ học vấn và điều kiện gia đình.

---

### SECTION 6: EQUITY SCREENING & ANALYSIS (PHÂN TÍCH CỔ PHIẾU)

*Lưu ý thiết kế: Tối giản, không chèn đoạn văn dài dòng, hiển thị bảng chuẩn mực số liệu.*

#### 6A. Tiêu Chí Lựa Chọn Cổ Phiếu (Stock Selection Criteria)
- **Section Heading:** `STOCK SELECTION CRITERIA`
- **Bảng 7 tiêu chí:**
  1. `Profitability`: `ROE > 15%`
  2. `Valuation`: `Forward P/E ≤ 16; P/B < 3`
  3. `Financial Health`: `D/E < 0.8; banks assessed by key risk indicators`
  4. `Dividends`: `Stable payout history`
  5. `Liquidity`: `Large-cap, highly liquid stocks`
  6. `Exclusions`: `Tobacco, weapons, gambling`
  7. `ESG`: `Transparent governance and sustainable growth`

#### 6B. Phân Tích Cổ Phiếu Đã Được Chọn (Selected Stock Analysis)
- **Section Heading:** `SELECTED STOCK ANALYSIS`
- **Bảng thông tin 5 mã cổ phiếu:**
  | Ticker | Ngành | Vai trò | Động lực lợi nhuận chính | Nhu cầu của gia đình mà mã đáp ứng |
  | :--- | :--- | :--- | :--- | :--- |
  | **VCB** | Ngân hàng | Phòng thủ (nền ổn định) | Tăng trưởng tín dụng, lãi suất | Bảo toàn vốn, nhu cầu tích lũy dài hạn |
  | **DHG** | Dược phẩm | Phòng thủ | Nhu cầu y tế, ít theo chu kỳ | Giảm biến động, giữ ổn định giá trị |
  | **GAS** | Năng lượng | Phòng thủ có dòng tiền | Sản lượng và giá khí | Dòng tiền ổn định, đa dạng hóa ngành |
  | **MWG** | Bán lẻ | Tăng trưởng | Sức mua tiêu dùng | Mục tiêu nhà ở và quỹ giáo dục dài hạn |
  | **SSI** | Chứng khoán | Tăng trưởng, chu kỳ | Thanh khoản và tâm lý thị trường | Tăng giá trị khi thị trường thuận lợi |

#### 6C. Đánh Giá Hiệu Suất Cổ Phiếu (Performance Evaluation)
- **Section Heading:** `PERFORMANCE EVALUATION`
- **Bảng số liệu thống kê chuẩn hóa chu kỳ tháng & năm:**
  | TICKER | MONTHLY AVG RETURN | MONTHLY STD DEV | ANNUALIZED RETURN | ANNUALIZED STD DEV |
  | :--- | :---: | :---: | :---: | :---: |
  | **VCB** | `0.76%` | `6.48%` | `9.54%` | `22.43%` |
  | **DHG** | `0.35%` | `5.56%` | `4.30%` | `19.26%` |
  | **GAS** | `1.23%` | `12.18%` | `15.76%` | `42.20%` |
  | **MWG** | `1.05%` | `9.44%` | `13.32%` | `32.69%` |
  | **SSI** | `0.92%` | `13.26%` | `11.64%` | `45.93%` |

---

### SECTION 7: MARKOWITZ PORTFOLIO OPTIMIZATION (TỐI ƯU HÓA DANH MỤC MARKOWITZ)

Bao gồm 2 phần lớn: **Phần A (ORP)** và **Phần B (OCP)**.

#### PHẦN A: OPTIMAL RISKY PORTFOLIO (ORP) — 4 SUB-SECTIONS

##### 1. Optimal Risky Portfolio (Biểu đồ & Bảng tỷ trọng)
- **Section Heading:** `OPTIMAL RISKY PORTFOLIO`
- **Card 1 (Mẫu Concept - Dark Navy `#0B132B`):**
  - Tiêu đề: `Optimal Risky Portfolio`
  - Nhãn: `Selected Stocks`
  - 4 Badges mã cổ phiếu: `VCB`, `SSI`, `MWG`, `GAS`.
- **Bố cục 2 cột:**
  - **Cột trái (Biểu đồ Donut ORP):**
    - Biểu đồ Donut SVG tương tác Hover với tỷ lệ phân bổ:
      - `MWG`: **42%** (Xanh ngọc lục bảo `#059669`)
      - `GAS`: **35%** (Xanh dương hoàng gia `#2563EB`)
      - `VCB`: **12%** (Xanh bạc hà `#10B981`)
      - `SSI`: **10%** (Tím thạch anh `#7C3AED`)
    - Tâm biểu đồ Donut: Hiển thị `100% ORP` (hoặc % của mã khi hover).
    - Legend chips bên dưới với nút chọn tương tác.
  - **Cột phải (Bảng phân bổ tài sản thực tế):**
    - Tiêu đề bảng: `Phân Bổ Tài Sản Tối Ưu`
    - Cột 1: Mã tài sản | Cột 2: `w trong ORP` | Cột 3: `Trên TỔNG tài sản`
    - `VCB`: `12%` \| `2.62%`
    - `SSI`: `10%` \| `2.12%`
    - `MWG`: `42%` \| `8.98%`
    - `GAS`: `35%` \| `7.45%`
    - `Trái phiếu / tiền gửi`: `—` \| `78.84%`
    - `Tổng kiểm tra`: `—` \| `100.00%` (Highlight vàng nhạt `#FEF3C7`)

##### 2. Correlation Matrix (Ma Trận Tương Quan)
- **Section Heading:** `CORRELATION MATRIX`
- **Concept Card trắng sáng:**
  - Tiêu đề: `Correlation Matrix`
  - Subtitle: `VCB · SSI · MWG · GAS`
  - Mô tả: *"Shows how stock returns move in relation to one another, supporting portfolio diversification."*
- **Bảng ma trận tương quan 4x4 (Đã loại bỏ DHG):**
  | Mã | VCB | SSI | MWG | GAS |
  | :--- | :---: | :---: | :---: | :---: |
  | **VCB** | `1.0000` | `0.4304` | `0.2691` | `0.5219` |
  | **SSI** | `0.4304` | `1.0000` | `0.4035` | `0.1073` |
  | **MWG** | `0.2691` | `0.4035` | `1.0000` | `0.2991` |
  | **GAS** | `0.5219` | `0.1073` | `0.2991` | `1.0000` |

##### 3. Portfolio Performance (Hiệu Suất Danh Mục ORP)
- **Section Heading:** `PORTFOLIO PERFORMANCE`
- **Card thiết kế tối giản nền trắng bo góc viền hairline mỏng:**
  - Tiêu đề card: `Portfolio Performance`
  - Mục 1: **Expected Return**
    - Giá trị: `1.0628% / month` (Font JetBrains Mono, đậm, cỡ lớn 24px)
  - Đường kẻ mỏng phân cách (Hairline Divider)
  - Mục 2: **Portfolio Risk**
    - Giá trị: `7.6695% / month` (Font JetBrains Mono, đậm, cỡ lớn 24px)
  - Đường kẻ mỏng phân cách (Hairline Divider)
  - Mục 3: **Sharpe Ratio** *(Người dùng yêu cầu thêm)*
    - Giá trị: `0.0824` (Nhấn màu xanh lục bảo `#059669`, cỡ 24px font mono)

##### 4. Optimization Objective (Mục Tiêu Tối Ưu Hóa ORP)
- **Section Heading:** `OPTIMIZATION OBJECTIVE`
- **Card thiết kế Dark Navy `#0B132B`:**
  - Tiêu đề card: `Optimization Objective` (Chữ trắng 19px, đậm)
  - Nội dung mô tả: *"Identify the risky portfolio with the highest Sharpe Ratio to balance excess return against portfolio risk."* (Chữ xám nhạt `#94A3B8`, cỡ 15px)

---

#### PHẦN B: OPTIMAL COMPLETE PORTFOLIO (OCP) — 4 SUB-SECTIONS ĐỘC LẬP

> *Theo yêu cầu đặc tả mới nhất:* Mỗi ô dữ liệu của OCP được tách thành **01 Section độc lập** trên giao diện (tương tự như 4 section của phần ORP), đan xen màu nền trắng sáng (`section`) và xám nhạt (`section--alt`), thẻ thông tin được căn giữa trang (`max-width: 580px; margin: 0 auto;`) đạt tính chuẩn mực, trang nhã.

##### 1. Optimal Asset Allocation (Phân Bổ Tài Sản OCP)
- **ID Section:** `#ocp-asset-allocation` (Nền trắng chuẩn `section`)
- **Section Heading:** `OPTIMAL ASSET ALLOCATION`
- **Card thiết kế Dark Navy `#0B132B`:**
  - Icon: Biểu đồ tròn Pie Chart SVG màu xanh dương `#3B82F6`.
  - Tiêu đề card: `Optimal Asset Allocation` (Chữ trắng 19px, đậm).
  - Chỉ số 1:
    - Giá trị: `21.16%` (Trắng, cỡ lớn 28px font mono)
    - Nhãn: `Risky Portfolio (ORP)` (Màu xám nhạt `#94A3B8`, 14px)
  - Đường kẻ phân cách mỏng (`rgba(255, 255, 255, 0.12)`)
  - Chỉ số 2:
    - Giá trị: `78.84%` (Trắng, cỡ lớn 28px font mono)
    - Nhãn: `Risk-free Asset` (Màu xám nhạt `#94A3B8`, 14px)

##### 2. Portfolio Performance (Hiệu Suất Danh Mục OCP)
- **ID Section:** `#ocp-performance` (Nền xám nhạt `section--alt`)
- **Section Heading:** `PORTFOLIO PERFORMANCE (OCP)`
- **Card thiết kế Light White bo góc viền hairline:**
  - Icon: Biểu đồ xu hướng Trending Chart SVG màu xanh dương `#3B82F6`.
  - Tiêu đề card: `Portfolio Performance` (Chữ đen than `#0F172A`, 19px, đậm).
  - Chỉ số 1:
    - Nhãn: `Expected Return` (Màu xám `#64748B`, 13.5px)
    - Giá trị: `0.5653%` (Xanh dương đậm `#2563EB`, cỡ 28px font mono)
    - Đơn vị/chu kỳ: `Per month`
  - Chỉ số 2 (cách 24px phía dưới):
    - Nhãn: `Portfolio Risk` (Màu xám `#64748B`, 13.5px)
    - Giá trị: `1.6232%` (Đen than `#0F172A`, cỡ 28px font mono)
    - Đơn vị/chu kỳ: `Monthly standard deviation`

##### 3. Risk Profile (Hồ Sơ Rủi Ro Khách Hàng Trong OCP)
- **ID Section:** `#ocp-risk-profile` (Nền trắng chuẩn `section`)
- **Section Heading:** `RISK PROFILE`
- **Card thiết kế Light White bo góc viền hairline:**
  - Icon: Chiếc khiên an toàn Shield Check SVG màu xanh dương `#3B82F6`.
  - Tiêu đề card: `Risk Profile` (Chữ đen than `#0F172A`, 19px, đậm).
  - Giá trị phân loại: `Moderate` (Đen than `#0F172A`, 24px đậm).
  - Chỉ số: `Risk Aversion (A) = 5.07` (Slate `#475569`, 14px font mono).
  - Mô tả: *"Allocation tailored to the family's risk tolerance and long-term financial needs."* (Chữ xám than `#475569`, 14.5px, line-height 1.55).

##### 4. Investment Objective (Mục Tiêu Đầu Tư OCP)
- **ID Section:** `#ocp-investment-objective` (Nền xám nhạt `section--alt`)
- **Section Heading:** `INVESTMENT OBJECTIVE`
- **Card thiết kế Dark Navy `#0B132B`:**
  - Icon: Mục tiêu Target / Bullseye SVG màu xanh dương `#3B82F6`.
  - Khối trên:
    - Tiêu đề: `Investment Objective` (Chữ trắng 19px, đậm).
    - Mô tả: *"Balance long-term growth, risk reduction, and capital preservation."* (Chữ xám nhạt `#94A3B8`, 14.5px, line-height 1.55).
  - Đường kẻ phân cách mỏng (`rgba(255, 255, 255, 0.12)`)
  - Khối dưới:
    - Phụ đề: `Optimal Complete Portfolio` (Chữ trắng 17px, đậm).
    - Mô tả: *"Combining ORP with a risk-free asset."* (Chữ xám nhạt `#94A3B8`, 14.5px, line-height 1.55).


---

### SECTION 8: 6.3. FINANCIAL PLAN AND GOAL IMPLEMENTATION ROADMAP (INVESTMENT PLAN EVALUATION)

- **Vị trí:** Tiếp theo sau phần Markowitz Portfolio Optimization (OCP).
- **ID Section:** `#financial-plan` (Nền xám nhạt `section--alt`)
- **Tiêu đề & Phụ đề chuẩn hệ thống (Standard System Heading):**
  - Cấu trúc: `<div className="section-heading sw-heading">`
  - Tiêu đề chính (`.sw-heading__title` + `.sw-heading__title-highlight`): `INVESTMENT PLAN EVALUATION SHEET` (In hoa toàn bộ, font-size clamp(2.4rem, 4.8vw, 3.6rem), font-weight 900, gradient than chì sang xanh ngọc `var(--gradient-text)`).
  - Phụ đề (`.sw-heading__subtitle`): *"The evaluation shows that the investment plan is fully capable of meeting the 10-year housing goal without relying on financial leverage."* (Chữ xám `#52525B`, max-width 680px, căn giữa).

#### 1. Bảng Đánh Giá Kế Hoạch Đầu Tư (Evaluation Table Card)
- **Thẻ Card:** Bo góc 20px, viền hairline `1px solid rgba(226, 232, 240, 0.95)`, nền trắng `#FFFFFF`, đổ bóng nhẹ.
- **Thanh tiêu đề bảng (Table Header):** Nền Dark Navy Deep `#0B132B`, chữ in hoa trắng, cỡ 12px font-bold.
- **Các cột bảng:**
  1. `GOAL` (Cột mục tiêu, canh trái)
  2. `GOAL VALUE( VND MILLION )` (Cột giá trị mục tiêu, đơn vị triệu đồng)
  3. `ACQUIRED CAPITAL SOURCE` (Cột nguồn vốn tích lũy đạt được)
  4. `RESULT` (Cột kết quả đánh giá)
- **Dữ liệu thực tế các hàng (Real Data Rows):**
  | GOAL | GOAL VALUE( VND MILLION ) | ACQUIRED CAPITAL SOURCE | RESULT |
  | :--- | :---: | :---: | :---: |
  | **Vehicle Purchase (Year 3)** | `912,93` | `442,16` | **Unachieved** *(Màu đỏ/rose `#E11D48`)* |
  | **Loan Recovery** | `100` | `100` | **Achieved** *(Màu xanh ngọc `#059669`)* |
  | **Housing Purchase (Year 10)** | `6.056,60` | `6.066,96` | **Achieved** *(Màu xanh ngọc `#059669`)* |

*Ghi chú định dạng:*
- Cột `GOAL` hiển thị font đậm màu xanh hoàng gia `#2563EB`.
- Cột số liệu hiển thị font `JetBrains Mono` màu than chì `#0F172A`.
- Cột `RESULT`: Màu đỏ hồng `#E11D48` cho *Unachieved* và màu xanh ngọc `#059669` cho *Achieved*.

#### 2. Thẻ Chỉ Số Cốt Lõi (Institutional Highlights)
- **10-Year Housing Goal:** Thặng dư vốn `+10,38 triệu đ` (Tổng vốn sau thuế 6.066,96 tr vượt giá trị nhà 6.056,60 tr sau 10 năm lạm phát 4.5%).
- **Emergency Reserve:** `150 triệu đ` bảo lưu dự phòng thanh khoản an toàn, không đem toàn bộ tiền mặt đi đầu tư rủi ro (đúng nguyên tắc chuẩn IPS).
- **Compound Growth:** Tỷ suất sinh lời OCP `0,5653% / tháng` (`6,78% / năm`) giúp đạt mục tiêu an cư mà không cần sử dụng đòn bẩy tài chính nợ vay.

---

### SECTION 9: INVESTMENT POLICY STATEMENT (IPS) REPORT

- **Vị trí:** Sau phần Financial Plan Evaluation.
- **ID Section:** `#ips-report` (Nền xám nhạt `section--alt`)
- **Tiêu đề Section Heading:**
  - Tiêu đề chính: `INVESTMENT POLICY STATEMENT` (In hoa toàn bộ, font chữ lớn, gradient chữ than chì sang xanh ngọc).
  - Phụ đề: *"The Nam–Nu Family · A decade-long strategy for balanced growth and financial security."*
- **Khối Văn Kiện IPS Chính (IPS Document Card):**
  - Thẻ card nền trắng bo góc lớn 24px, viền mỏng hairline, đổ bóng nhẹ nhàng.
  - **Header văn kiện:**
    - Eyebrow: `INVESTMENT POLICY STATEMENT` (Chữ xanh dương `#2563EB`, đậm, 12.5px).
    - Tiêu đề: `The Nam–Nu Family` (28px font-extrabold `#0F172A`).
    - Phụ đề: `A decade-long strategy for balanced growth and financial security.` (`#64748B`, 15px).
  - **Lưới thông số hồ sơ 2 cột (Upper 2-Column Grid):**
    - Cột trái:
      - Thẻ 1: `Net worth`: `₫950M` | `Total assets less liabilities`
      - Thẻ 2: `MONTHLY NET CASH FLOW` *(Được tích hợp theo hình ảnh 2)*:
        - Tiêu đề thẻ: `MONTHLY NET CASH FLOW`
        - Số lớn nổi bật: `+₫3.7M` (Màu xanh ngọc lục bảo `#059669`)
        - Badge pill: `Positive cash flow after optimization` (Nền xanh nhạt `#DCFCE7`, chữ `#15803D`)
        - Hairline divider
        - Dòng 1: `Before optimization`: `−₫8.3M` (Đỏ `#EF4444`)
        - Dòng 2: `After optimization`: `+₫3.7M` (Xanh `#059669`)
        - Dòng 3: `Monthly improvement`: `+₫12M` (Xanh `#059669`)
    - Cột phải:
      - Thẻ 3: `Risk profile`: `Moderate` | `Balanced investor`
      - Thẻ 4: `Risk aversion`: `5.07` | `Coefficient A`
  - **Thẻ Phân Bổ Danh Mục Tối Ưu (Optimal Complete Portfolio):**
    - Tiêu đề: `Optimal Complete Portfolio` (19px font-bold `#0F172A`)
    - Phụ đề: `Recommended investment allocation` (`#64748B`)
    - **Thanh phân bổ ngang 2 màu (Segmented Allocation Bar):**
      - Đoạn trái 21.16%: Xanh hoàng gia `#2563EB`
      - Đoạn phải 78.84%: Xanh da trời nhạt `#93C5FD`
    - **Legend 2 cột:**
      - Cột 1 (Dot xanh đậm `#2563EB`): `21.16%` | `Optimal Risky Portfolio` | `VCB · SSI · MWG · GAS`
      - Cột 2 (Dot xanh nhạt `#93C5FD`): `78.84%` | `Vietnam Government Bonds` | `Risk-free asset assumption`
  - **Thẻ Chiến Lược Đầu Tư (Investment Strategy Card - Dark Navy `#0B132B`):**
    - Eyebrow: `INVESTMENT STRATEGY` (Xám nhạt `#94A3B8`, in hoa 11.5px)
    - Tiêu đề: `Balanced Growth` (Chữ trắng 20px font-extrabold)
    - Mô tả: *"Balance long-term capital growth with capital preservation while accounting for family expenses, debt obligations, and liquidity needs."* (Chữ xám sáng `#CBD5E1`, 14.5px, line-height 1.6)
    - Nút tròn mũi tên cuộn xuống ở giữa đáy card.

---

### SECTION 10: FOOTER (CHÂN TRANG)
- **Logo & Thương hiệu:** FBSF Cash Flow Optimization Fund.
- **Sứ mệnh / Tagline:** *"Disciplined Wealth Architecture & Portfolio Optimization for Modern Families."*
- **Khối liên kết (Quick Links):** Điều hướng tới Overview, Financial Profile, Risk Assessment, Equity Screening, Portfolio Optimization, IPS Delivery.
- **Tuyên bố miễn trừ trách nhiệm (Regulatory Disclaimer):** Các khuyến nghị tài chính dựa trên mô hình định lượng kinh tế học và lý thuyết danh mục Markowitz, phục vụ mục đích tư vấn hoạch định tài sản cá nhân và gia đình.
- **Copyright:** `© 2026 FBSF Fund. All rights reserved.`

---

## III. NGUYÊN TẮC THIẾT KẾ DÀNH CHO AI REDESIGN (DESIGN DIRECTIVES)

1. **Phong cách tối giản, ít chữ (Minimal & High Data Density):**
   - Giữ nguyên các nội dung, số liệu, nhãn và công thức được liệt kê ở trên.
   - **Tuyệt đối không tự bịa thêm các đoạn văn dài dòng, khẩu hiệu tiếp thị AI sáo rỗng.**
   - Để dữ liệu số học tài chính làm trung tâm (Font số Monospace rõ ràng, khoảng cách thoáng đãng).

2. **Thẩm mỹ Private Wealth Management sang trọng:**
   - Sử dụng thẻ bo góc lớn (Border Radius: `18px - 20px`).
   - Đường viền siêu mỏng hairline (`border: 1px solid rgba(226, 232, 240, 0.85)` hoặc viền mờ `rgba(255, 255, 255, 0.1)`).
   - Đổ bóng nhẹ nhàng, có chiều sâu (`box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04)`).
   - Tận dụng độ tương phản giữa các thẻ sáng (Light Cards) và các thẻ tối (Dark Navy Cards `#0B132B`).

3. **Tính trực quan của biểu đồ và bảng:**
   - Các bảng số liệu phải có định dạng Monospace cho số liệu tỷ lệ %, căn giữa hoặc căn phải thẳng hàng.
   - Tương tác Hover trên biểu đồ Donut và các dòng bảng để tạo cảm giác trang web sống động và chuyên nghiệp.
   - Đáp ứng hiển thị hoàn hảo trên cả Desktop (2 cột / 2x2 grid) và Mobile (1 cột xếp tầng).
