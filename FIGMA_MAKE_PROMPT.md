# BỘ PROMPT FIGMA MAKE: THIẾT KẾ LẠI TOÀN BỘ GIAO DIỆN FBSF CASH FLOW OPTIMIZATION FUND

> **Tài liệu câu lệnh thiết kế chuẩn Figma Make (Figma AI / Make Designs)**  
> **Ngôn ngữ:** 100% Tiếng Việt (Bao gồm chỉ dẫn kỹ thuật, cấu trúc layout và toàn bộ nội dung web)  
> **Phong cách:** White & Institutional Green · Private Wealth Fiduciary · Zero AI Slop  
> **Cơ chế đặc thù:** Asymmetrical Metric Dominance (Chỉ nổi bật số lớn nhất) · Continuous Connective Tissue (Chống phân mảnh dạng Slide)

---

## CÁCH SỬ DỤNG TRONG FIGMA MAKE
1. Mở **Figma** (hoặc ứng dụng Figma Desktop có tích hợp Figma AI / Make Designs).
2. Tạo một file thiết kế mới hoặc nhấn phím tắt gọi hộp thoại **Make Designs / First Draft**.
3. Sao chép toàn bộ khối lệnh prompt ở khung bên dưới và dán vào thanh nhập lệnh.
4. Nhấn **Generate** để sinh ra toàn bộ Frame Desktop 1440px hoàn chỉnh.

---

```markdown
### BỐI CẢNH VÀ VAI TRÒ (ROLE & CONTEXT)
Bạn là một Giám đốc Thiết kế Giao diện Cấp cao (Principal Design Systems Architect) tại Stripe và Sequoia Capital, chuyên về các hệ thống tài chính định chế (Institutional Wealth Management & Fiduciary Systems). Bạn được giao nhiệm vụ thiết kế lại toàn bộ giao diện Landing Page cho quỹ đầu tư tài chính gia đình: "FBSF Cash Flow Optimization Fund".

### YÊU CẦU NỀN TẢNG & NGUYÊN TẮC BẤT BIẾN (CORE MANDATES)
1. **Bảo toàn 100% trật tự 10 Section:** Không đảo lộn, không chèn section mới, không chia trang độc lập. Tên section ngắn gọn, bỏ phụ đề dài dòng.
2. **Bảng màu Trắng & Xanh lục Định chế (White & Institutional Green):** 
   - Nền chủ đạo: Trắng ngà Alabaster (#F8FAF9) và Trắng tinh thể Pure White (#FFFFFF).
   - Nền thẻ phụ / Glass: rgba(255, 255, 255, 0.85) với backdrop-blur 16px.
   - Xanh lục quyền uy: Xanh rừng thẫm Deep Forest (#062C1E) làm điểm tựa tương phản mạnh mẽ.
   - Xanh hành động: Pine Green (#0B4630) cho nút bấm chính và hover.
   - Xanh ngọc nổi bật: Vibrant Emerald (#10B981) DÀNH RIÊNG cho số liệu cao nhất, tỷ trọng lớn nhất hoặc kết quả đạt mục tiêu.
   - Nền highlight phẳng: Mint Surface (#ECFDF5).
   - Đường viền Tactile Hairline: 1px solid #E2ECE7 sắc sảo (Không dùng viền đậm hay viền phát sáng).
3. **Quy tắc Số liệu Bất đối xứng (Asymmetrical Metric Dominance):**
   - Giảm 65% văn bản rườm rà. Chữ mô tả chỉ tối đa 1–2 dòng.
   - Số liệu tài chính hiển thị bằng font Monospace (JetBrains Mono) dạng Tabular Numbers.
   - TRONG MỖI CỤM SỐ LIỆU (ví dụ cụm 4 số), CHỈ ĐƯỢC PHÓNG TO VÀ TÔ MÀU NỔI BẬT DUY NHẤT CON SỐ CAO NHẤT / ĐỘT PHÁ NHẤT (cỡ chữ 32px–40px, màu Emerald #10B981 hoặc Deep Forest #062C1E). Toàn bộ các con số còn lại phải hiển thị ở cấp độ bổ trợ trung tính (cỡ chữ 16px–18px, màu Slate #52665D).
4. **Cơ chế Liên kết Xuyên suốt (Connective Tissue - Triệt tiêu cảm giác Slide thuyết trình):**
   - Trục chỉ số định chế (Vertical Data Spine): Một đường kẻ hairline mảnh 1px chạy dọc lề trái xuyên suốt từ Section 2 đến Section 9, đính kèm các điểm neo mốc số thứ tự bước (01 đến 05) kết nối dòng chảy.
   - Lưới tọa độ ngầm (Architectural Flow Grid): Lưới 64px x 64px mờ nhẹ (#E2ECE7, opacity 0.3) với mặt nạ radial mask tan biến dần ra mép.
   - Thẻ chờm giao thoa (Section Overlap Cards): Đuôi của mỗi section có thành phần đồ họa hoặc thẻ số liệu nổi chờm 24px–40px qua ranh giới section kế tiếp, xóa bỏ hoàn toàn đường cắt ngang thô ráp.
   - Mũi tên dẫn hướng dòng chảy (Micro Flow Connectors): Đường nối bezier siêu mảnh và mũi tên định hướng luồng tư vấn.
5. **Triệt tiêu hoàn toàn dấu hiệu AI Slop (Zero AI Slop):**
   - TUYỆT ĐỐI CẤM các badge bo tròn phát sáng neon (không gradient hồng/tím/cyan).
   - TUYỆT ĐỐI CẤM các chấm nhấp nháy phát sáng (pulsing dots) giả radar.
   - TUYỆT ĐỐI CẤM đổ bóng mờ ảo vô tội vạ (box-shadow phát quang). Chỉ dùng bóng đổ tự nhiên siêu nhẹ: 0 4px 20px -2px rgba(10, 22, 40, 0.04).
   - Nhãn thẻ thay thế bằng Architectural Hairline Overline: chữ in hoa 11px, giãn cách chữ 0.12em, viền 1px phẳng.

---

### THÔNG SỐ CANVAS & BỐ CỤC CHUNG (DESKTOP FRAME SETUP)
- Chiều rộng Frame: 1440px, Auto Layout dọc (Vertical Auto Layout, Hug contents).
- Grid: 12 cột, Margin lề hai bên 80px, Gutter giữa các cột 24px.
- Khoảng cách giữa các section: Padding dọc 96px - 112px, tận dụng thẻ chờm 32px để tạo liên kết tự nhiên.
- Typography: Tiêu đề dùng Plus Jakarta Sans (Font-weight 700/800, letter-spacing -0.02em); Nội dung dùng Inter (Font-weight 400/500); Số liệu dùng JetBrains Mono (Tabular Nums).

---

### ĐẶC TẢ CHI TIẾT TỪNG SECTION (10 SECTIONS TUYẾN TÍNH - 100% TIẾNG VIỆT)

#### SECTION 1: THANH ĐIỀU HƯỚNG CỐ ĐỊNH (NAVBAR)
- Vị trí: Sticky top, chiều cao 72px, Auto Layout ngang, Padding: 0 80px, Space-between.
- Nền: Glassmorphism trắng mờ rgba(255, 255, 255, 0.85), backdrop-filter: blur(16px), viền dưới 1px solid #E2ECE7.
- Khối Thương hiệu (Trái):
  * Logo FBSF: Chữ "FBS" màu Deep Forest (#062C1E, Bold 800) ghép với chữ "F" màu Emerald (#10B981, Bold 800).
  * Nhãn phụ kiến trúc (Overline phẳng): "QUỸ TỐI ƯU HÓA DÒNG TIỀN MPT" (Font 10px, Upper, #52665D, viền hairline 1px bao quanh, không có chấm phát sáng).
- Khối Điều hướng (Giữa):
  * 6 Liên kết chữ phẳng, tối giản: "Tổng quan", "Hồ sơ", "Rủi ro", "Cổ phiếu", "Danh mục", "Văn kiện IPS". Màu chữ #52665D, hover #062C1E với gạch chân vi mô 1px.
- Khối Hành động (Phải):
  * Nút CTA: "Bắt đầu tư vấn ↗" (Nền Deep Forest #062C1E, chữ trắng, Padding 10px 20px, bo góc 8px, hover nền #0B4630).

---

#### SECTION 2: TRANG CHỦ GIỚI THIỆU (HERO SECTION)
- Bố cục: Căn giữa (Center-aligned), Auto Layout dọc, khoảng cách phần tử 32px, Padding: 120px 80px 80px.
- Nền: Alabaster (#F8FAF9) với lưới tọa độ kiến trúc 64px x 64px mờ nhẹ.
- Tiêu đề chính (H1):
  * Dòng 1: "QUỸ TỐI ƯU HÓA DÒNG TIỀN FBSF" (Cỡ chữ 56px, Deep Forest #062C1E, Bold 800).
  * Dòng 2: "CÂN BẰNG TĂNG TRƯỞNG & BẢO TOÀN VỐN" (Cỡ chữ 40px, Emerald #10B981, Bold 700).
- Mô tả ngắn (1 dòng duy nhất): "Chiến lược quản trị tài chính gia đình khoa học dựa trên lý thuyết danh mục hiện đại Markowitz MPT." (Màu #52665D, cỡ 18px).
- Nút bấm kép:
  * Nút chính: "Bắt đầu tư vấn →" (Nền #062C1E, chữ trắng, cỡ 16px, Padding 14px 28px, bo góc 8px).
  * Nút phụ: "Khám phá quy trình" (Nền trắng, viền 1px solid #E2ECE7, chữ #062C1E).
- Thanh Chỉ Số Nổi Bật (Stats Ribbon Strip - Chờm 36px xuống Section 3 để tạo kết nối):
  * Bố cục: 4 khối số liệu nằm ngang trong một thẻ nổi Pure White (#FFFFFF), viền 1px solid #E2ECE7, bo góc 12px, Padding 24px 40px.
  * QUY TẮC NỔI BẬT BẤT ĐỐI XỨNG:
    1. Số 1: "500+" — Gia đình đã tư vấn (Cỡ 22px, màu Slate #52665D).
    2. Số 2: **"15% / NĂM"** — **Lợi nhuận mục tiêu (CON SỐ CAO NHẤT / ĐỘT PHÁ ➔ KÍCH THƯỚC ĐẠI TỰ 36px BOLD 800, MÀU EMERALD #10B981, NẰM TRONG CỘT CÓ NỀN MINT NHẠT #ECFDF5 ĐỂ NỔI BẬT DUY NHẤT TOÀN DẢI)**.
    3. Số 3: "98%" — Khách hàng gắn bó (Cỡ 22px, màu Slate #52665D).
    4. Số 4: "10 Năm" — Bề dày kiểm chứng định chế (Cỡ 22px, màu Slate #52665D).

---

#### SECTION 3: QUY TRÌNH HỆ THỐNG & KHUNG PHƯƠNG PHÁP LUẬN (SYSTEM WORKFLOW & FRAMEWORK)
- Bố cục: Auto Layout dọc, Padding: 100px 80px, khoảng cách giữa 2 khối 56px.
- Điểm kết nối thị giác: Trục dọc Data Spine bên trái bắt đầu nối từ thanh chỉ số Hero và phân nhánh vào 5 thẻ quy trình.
- Tiêu đề Section (H2): "QUY TRÌNH HỆ THỐNG & KHUNG PHƯƠNG PHÁP LUẬN" (Cỡ 32px, #062C1E).
- Khối 1: Quy trình tư vấn 5 bước (Bento Grid 5 thẻ tương tác, có số lớn góc card và liên kết cuộn):
  * Thẻ 01: "01. Khảo sát Hồ sơ Tài chính" (Ảnh minh họa, viền 1px #E2ECE7, mũi tên ↗).
  * Thẻ 02: "02. Định lượng Khẩu vị Rủi ro" (Ảnh minh họa, viền 1px #E2ECE7, mũi tên ↗).
  * Thẻ 03: "03. Sàng lọc Cổ phiếu Định chế" (Ảnh minh họa, viền 1px #E2ECE7, mũi tên ↗).
  * Thẻ 04: "04. Tối ưu hóa Danh mục Markowitz" (Ảnh minh họa, viền 1px #E2ECE7, mũi tên ↗).
  * Thẻ 05: "05. Xuất Văn kiện & Báo cáo IPS" (Ảnh minh họa, viền 1px #E2ECE7, mũi tên ↗).
- Khối 2: 4 Trụ cột Dịch vụ Cốt lõi (Lưới 2x2, thẻ nền trắng tối giản, icon monoline 1px):
  1. "Tái cấu trúc dòng tiền gia đình": Khắc phục thâm hụt, thiết lập thặng dư tự động hàng tháng.
  2. "Phân bổ tài sản Markowitz MPT": Tối ưu tỷ số Sharpe giữa rủi ro và lợi nhuận kỳ vọng.
  3. "Hoạch định tài chính đa giai đoạn": Đồng bộ mục tiêu mua xe (3 năm) và mua nhà an cư (10 năm).
  4. "Giám sát định kỳ & Quản trị rủi ro": Kiểm soát tỷ trọng Trái phiếu Chính phủ và cổ phiếu VN30.

---

#### SECTION 4: HỒ SƠ TÀI CHÍNH GIA ĐÌNH (FINANCIAL PROFILE)
- Bố cục: Lưới 2 cột bất đối xứng, Padding: 96px 80px.
- Tiêu đề Section (H2): "HỒ SƠ TÀI CHÍNH GIA ĐÌNH" (Khách hàng mục tiêu: Gia đình Anh Nam & Chị Nữ).
- Cột 1: Chẩn đoán Dòng tiền (Trước & Sau Tái cấu trúc):
  * Thẻ so sánh dòng tiền:
    - Dòng tiền ban đầu: "-8.300.000 đ/tháng" (Thâm hụt chi tiêu do tiền thuê nhà và nợ đất, cỡ chữ 18px, màu đỏ thẫm #E11D48).
    - Dòng tiền sau tối ưu: "+3.700.000 đ/tháng" (Thặng dư hàng tháng, cỡ chữ 18px, màu Slate #52665D).
    - **CHỈ SỐ CAO NHẤT / ĐỘT PHÁ TOÀN KHỐI: "+12.000.000 Đ/THÁNG" — CẢI THIỆN DÒNG TIỀN RÒNG (ĐẠI TỰ 34px BOLD 800, MÀU EMERALD #10B981, ĐÓNG KHUNG NỀN MINT #ECFDF5 VIỀN 1px SẮC NÉT)**.
- Cột 2: Bảng Cân đối Tài sản & Giá trị Ròng:
  * Tổng tài sản: "1.400.000.000 đ" (Cỡ 18px, Slate #52665D).
  * Tổng nợ phải trả: "450.000.000 đ" (Vay đất Bảo Lộc, cỡ 18px, Slate #52665D).
  * **TÀI SẢN RÒNG (NET WORTH): "950.000.000 Đ" (CON SỐ QUAN TRỌNG NHẤT ➔ ĐẠI TỰ 32px BOLD 800, MÀU DEEP FOREST #062C1E)**.
  * Phân bổ tài sản hiện tại: Đất Bảo Lộc 71.4%, Tiền gửi 21.4%, Phải thu 7.1%.

---

#### SECTION 5: ĐO LƯỜNG KHẨU VỊ RỦI RO (RISK ASSESSMENT)
- Bố cục: Bố cục 2 phần: Bảng trắc nghiệm thu gọn (Bên trái) + Thẻ kết quả định lượng (Bên phải). Padding: 96px 80px.
- Tiêu đề Section (H2): "ĐO LƯỜNG KHẨU VỊ RỦI RO" (Mô hình kinh tế lượng chuẩn hóa GSOEP).
- Khối Kết quả Khẩu vị Rủi ro:
  * Điểm khảo sát: "23 / 34 điểm" (Cỡ 18px, Slate #52665D).
  * Phân loại: "Moderate — Thận trọng & Tăng trưởng cân bằng" (Thẻ phẳng, viền 1px, không phát sáng).
  * **HỆ SỐ NGẠI RỦI RO TOÁN HỌC: "A = 5.07" (CHỈ SỐ TRỌNG TÂM DUY NHẤT ➔ ĐẠI TỰ 36px BOLD 800 TRÊN NỀN THẺ DEEP FOREST #062C1E, CHỮ TRẮNG, KÈM GHI CHÚ CHUẨN GSOEP)**.
  * (Điểm số 23 và phân loại hiển thị phụ trợ, nhường hoàn toàn sự chú ý cho hệ số A=5.07 dùng để giải bài toán Markowitz).

---

#### SECTION 6: SÀNG LỌC & PHÂN TÍCH CỔ PHIẾU (EQUITY SCREENING & ANALYSIS)
- Bố cục: Bảng phân tích định chế (Institutional Comparison Table), Padding: 96px 80px.
- Tiêu đề Section (H2): "SÀNG LỌC & PHÂN TÍCH CỔ PHIẾU" (Bộ tiêu chí 7 yếu tố VN30).
- Bảng so sánh 5 mã cổ phiếu:
  * Các cột: Mã CP | Ngành | P/E | ROE | Lợi nhuận kỳ vọng tháng | Trạng thái.
  * Dòng 1: **VCB** (Ngân hàng) | P/E 12.8 | **ROE: 24.5% (CHỈ SỐ CAO NHẤT BẢNG ➔ HIGHLIGHT CHỮ EMERALD #10B981 BOLD 700)** | LN: 0.76%/tháng | Chọn vào ORP.
  * Dòng 2: **GAS** (Năng lượng) | P/E 14.1 | ROE: 18.2% | LN: 1.23%/tháng | Chọn vào ORP.
  * Dòng 3: **MWG** (Bán lẻ) | P/E 15.6 | ROE: 19.8% | LN: 1.05%/tháng | Chọn vào ORP.
  * Dòng 4: **SSI** (Chứng khoán) | P/E 13.5 | ROE: 16.4% | LN: 0.92%/tháng | Chọn vào ORP.
  * Dòng 5: **DHG** (Dược phẩm) | P/E 16.8 | ROE: 14.2% | LN: 0.35%/tháng | **Bị loại (Dòng hiển thị mờ, chữ nhạt #94A3B8 vì hiệu suất không bù đắp được rủi ro)**.

---

#### SECTION 7: TỐI ƯU HÓA DANH MỤC MARKOWITZ (MARKOWITZ PORTFOLIO OPTIMIZATION)
- Bố cục: 2 tầng gộp liền mạch không chia cắt:
- Tiêu đề Section (H2): "TỐI ƯU HÓA DANH MỤC MARKOWITZ"
- **TẦNG 1: DANH MỤC RỦI RO TỐI ƯU (ORP):**
  * Biểu đồ Donut SVG 4 mã: MWG (42%), GAS (35%), VCB (12%), SSI (10%).
  * QUY TẮC NỔI BẬT: **"MWG: 42%" (TỶ TRỌNG CAO NHẤT ➔ ĐẠI TỰ 34px Ở TÂM DONUT HOẶC THẺ HIGHLIGHT EMERALD #10B981, 3 mã còn lại kích thước nhỏ 16px Slate)**.
  * Khối Ma trận tương quan & Hiệu suất (2 cột):
    - Cột Ma trận 4x4: Bảng hiệp phương sai chuẩn hóa, viền 1px mờ.
    - Cột Hiệu suất ORP: Lợi nhuận kỳ vọng 1.06%/tháng (nhỏ), Rủi ro 7.67%/tháng (nhỏ) ➔ **"TỶ SỐ SHARPE: 2.41 / NĂM" (CHỈ SỐ CAO NHẤT / ĐỘT PHÁ ➔ PHÓNG TO 32px BOLD 800)**.
- **TẦNG 2: DANH MỤC HOÀN HẢO TỐI ƯU (OCP) - LƯỚI 2x2 BENTO:**
  * Ô 1 (Asset Allocation): **"78.84% TRÁI PHIẾU CHÍNH PHỦ" (TỶ TRỌNG LỚN NHẤT ÁP ĐẢO ➔ ĐẠI TỰ TRẮNG TRÊN THẺ NỀN TỐI DEEP FOREST #062C1E)**, "21.16% Cổ phiếu ORP" (Cỡ chữ 16px nhỏ hơn).
  * Ô 2 (Performance): Lợi nhuận kỳ vọng 0.5653%/tháng (6.78%/năm), Rủi ro danh mục 1.6232%/tháng (Độ biến động cực thấp).
  * Ô 3 (Risk Profile): Phân loại Moderate, Hệ số ngại rủi ro A = 5.07.
  * Ô 4 (Investment Objective): Tăng trưởng tài sản cân bằng kết hợp bảo tồn vốn dài hạn.

---

#### SECTION 8: ĐÁNH GIÁ KẾ HOẠCH ĐẦU TƯ & MỤC TIÊU (FINANCIAL PLAN EVALUATION)
- Bố cục: Thẻ tài liệu định chế với Bảng tiến độ và Khối tuyên ngôn, Padding: 96px 80px.
- Tiêu đề Section (H2): "ĐÁNH GIÁ KẾ HOẠCH ĐẦU TƯ & MỤC TIÊU" (Đồng bộ lộ trình tài chính 10 năm).
- Bảng Đánh giá 3 Mục tiêu:
  * Mục tiêu 1: Mua xe hơi (Năm 3) — Mục tiêu 912M | Đạt 442M | Kết quả: Chưa đạt (Nhãn đỏ/rose #E11D48 phẳng).
  * Mục tiêu 2: Thu hồi nợ (Năm 1) — Mục tiêu 100M | Đạt 100M | Kết quả: Đạt (Nhãn xanh ngọc phẳng).
  * Mục tiêu 3: **Mua nhà an cư (Năm 10)** — Mục tiêu 6.056,60M | **Tích lũy: 6.066,96M VNĐ** | Kết quả: Đạt.
- **CON SỐ VÀNG ĐỘT PHÁ DUY NHẤT (HIGHEST IMPACT):**
  * **"+10.380.000 Đ" — THẶNG DƯ TÍCH LŨY MUA NHÀ AN CƯ (VƯỢT MỤC TIÊU LẠM PHÁT ➔ ĐẠI TỰ 34px MÀU EMERALD #10B981, ĐẶT TRONG THẺ TRUNG TÂM)**.
  * Khẳng định cốt lõi: "100% Không cần vay nợ ngân hàng (Zero Leverage)" + Bảo lưu Quỹ khẩn cấp 150.000.000 đ.

---

#### SECTION 9: BÁO CÁO VĂN KIỆN ĐẦU TƯ (INVESTMENT POLICY STATEMENT - IPS)
- Bố cục: Thẻ chứng thư tài chính mô phỏng Fiduciary Certificate Card, viền 1px solid #E2ECE7, Padding: 96px 80px.
- Tiêu đề Section (H2): "BÁO CÁO VĂN KIỆN ĐẦU TƯ (IPS)" (Mã văn kiện: IPS-FBSF-2026-NN01).
- Nội dung văn kiện cô đọng:
  * Dấu xác nhận: "FIDUCIARY SEAL APPROVED" (Con dấu kiến trúc phẳng monoline).
  * Bảng tóm lược 3 chỉ số tài sản gia đình:
    - Giá trị tài sản ròng: 950.000.000 đ
    - Cải thiện dòng tiền: +12.000.000 đ/tháng
    - **Tỷ trọng phòng hộ an toàn: 78.84% Trái phiếu Chính phủ** (Chỉ số nổi bật nhất thẻ).
  * Tuyên ngôn thực thi: "Đảm bảo gia đình đạt mục tiêu an cư sau 10 năm mà không phải chịu rủi ro suy kiệt tài chính."

---

#### SECTION 10: CHÂN TRANG (FOOTER)
- Bố cục: 4 cột chuyên nghiệp + Bottom Bar pháp lý, Padding: 80px 80px 40px, Nền Alabaster (#F8FAF9), viền trên 1px solid #E2ECE7.
- Cột 1 (Thương hiệu): Logo FBSF + Tagline: "Quản trị dòng tiền & Phân bổ danh mục tối ưu cho gia đình Việt."
- Cột 2 (Quy trình 5 bước - Menu liên kết trực tiếp):
  * 01. Hồ sơ tài chính (#financial-profile)
  * 02. Đánh giá rủi ro (#risk-assessment)
  * 03. Phân tích cổ phiếu (#equity-analysis)
  * 04. Tối ưu danh mục (#markowitz)
  * 05. Văn kiện IPS (#ips-report)
- Cột 3 (Thông tin liên hệ & Sở hữu):
  * **Người sở hữu website: Trương Đoàn Anh Thư**
  * Email: contact@fbsf-fund.vn
  * Hotline: 1900 xxxx xx
  * Địa chỉ: TP. Hồ Chí Minh, Việt Nam
- Cột 4 (Thông số kiểm định):
  * Tiêu chuẩn: MPT Markowitz (1952) & Khảo sát rủi ro GSOEP (2025).
  * Tần suất tái cân bằng: Định kỳ hàng quý.
- Thanh đáy (Bottom Bar):
  * Bản quyền: "© 2026 FBSF Fund. Bản quyền thuộc về Trương Đoàn Anh Thư."
  * Miễn trừ trách nhiệm: "Báo cáo phục vụ mục đích hoạch định tài chính cá nhân và gia đình, không phải lời mời chào đầu tư công chúng."

---

### DANH MỤC CẤM KỴ THIẾT KẾ (ANTI-AI SLOP CHECKLIST)
- [x] KHÔNG sử dụng badge bo tròn phát sáng neon (hồng, tím, cyan).
- [x] KHÔNG sử dụng chấm tròn nhấp nháy (pulsing dot) radar.
- [x] KHÔNG dùng box-shadow phát quang lòe loẹt.
- [x] KHÔNG thiết kế trang web thành các slide ngắt quãng độc lập.
- [x] KHÔNG viết các đoạn văn dài quá 2 dòng.
- [x] KHÔNG làm nổi bật nhiều số cùng một lúc trong một cụm số liệu. Chỉ làm nổi bật duy nhất con số lớn nhất / có tác động mạnh nhất.
```

---

## BẢNG THAM CHIẾU SỐ LIỆU ĐẠI TỰ NỔI BẬT (KING METRIC REFERENCE TABLE)

Để hỗ trợ kiểm tra và đối soát sau khi Figma Make tạo bản vẽ, bảng dưới đây liệt kê chính xác con số duy nhất được phép làm nổi bật trong từng Section:

| Section | Tên Section | Con số duy nhất làm nổi bật (King Metric) | Cỡ chữ & Màu sắc | Các số phụ trợ (Neutral Muted) |
| :--- | :--- | :--- | :--- | :--- |
| **02** | Hero Section | **`15%/NĂM`** (Lợi nhuận mục tiêu) | 36px Bold 800 · Emerald `#10B981` | 500+ gia đình, 98% hài lòng, 10 năm kinh nghiệm (22px Slate) |
| **04** | Hồ sơ tài chính | **`+12.000.000 Đ/THÁNG`** (Cải thiện ròng) | 34px Bold 800 · Mint Box `#10B981` | Thâm hụt cũ -8.3M, Thặng dư mới +3.7M, Nợ 450M (18px) |
| **05** | Đo lường rủi ro | **`A = 5.07`** (Hệ số ngại rủi ro GSOEP) | 36px Bold 800 · Dark Card `#FFFFFF` | Điểm khảo sát 23/34, Phân loại Moderate (16px Slate) |
| **06** | Phân tích cổ phiếu | **`VCB ROE: 24.5%`** (Hiệu quả sinh lời cao nhất) | 20px Bold 700 · Emerald `#10B981` | ROE của MWG (19.8%), GAS (18.2%), SSI (16.4%), DHG (14.2%) |
| **07A** | Danh mục ORP | **`MWG: 42%`** (Tỷ trọng áp đảo) | 34px Bold 800 · Emerald `#10B981` | GAS (35%), VCB (12%), SSI (10%) (16px Slate) |
| **07A** | Hiệu suất ORP | **`SHARPE: 2.41`** (Quy đổi năm) | 32px Bold 800 · Emerald `#10B981` | Expected return 1.06%/tháng, Risk 7.67%/tháng (16px Slate) |
| **07B** | Danh mục OCP | **`78.84% TRÁI PHIẾU CP`** (Tỷ trọng an toàn) | 36px Bold 800 · White on `#062C1E` | Cổ phiếu ORP 21.16%, Risk 1.62%/tháng, Return 0.56%/tháng |
| **08** | Kế hoạch đầu tư | **`+10.380.000 Đ`** (Thặng dư vốn an cư 10 năm) | 34px Bold 800 · Mint Box `#10B981` | Xe hơi 442/912M (Chưa đạt), Thu hồi nợ 100M (16px) |
| **09** | Văn kiện IPS | **`78.84% PHÒNG HỘ TRÁI PHIẾU`** | 28px Bold 700 · Deep Forest `#062C1E` | Tài sản ròng 950M, Cải thiện dòng tiền +12M (16px Slate) |

---
*Tài liệu được khởi tạo và tối ưu hóa cho hệ thống AI Design của Figma Make.*
