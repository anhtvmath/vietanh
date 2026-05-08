const headerContent = `
<header style="
    display: flex; 
    align-items: center; 
    gap: 12px; 
    padding: 10px 20px; 
    background-color: #ffffff; 
    box-shadow: 0 2px 4px rgba(0,0,0,0.08); 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
">
    <!-- Logo/Title Section -->
    <div style="flex-shrink: 0; margin-right: 15px;">
        <span style="font-size: 18px; font-weight: 800; letter-spacing: -0.5px; color: #202124;">
            <span style="color: #1a73e8;">LATEX</span> PRO X
        </span>
        <span style="font-size: 13px; color: #5f6368; margin-left: 5px; border-left: 1px solid #dadce0; padding-left: 10px;">
            Hệ thống hỗ trợ giảng dạy
        </span>
    </div>

    <!-- Navigation Buttons -->
    <nav style="display: flex; gap: 8px;">
        <a href="tracnghiemLC.html" style="text-decoration: none;">
            <button type="button" style="background:#1a73e8; color:white; border:none; border-radius:6px; padding: 8px 12px; cursor:pointer; font-weight:600; font-size:12px; text-transform: uppercase; transition: background 0.2s;">
                Trắc nghiệm lựa chọn
            </button>
        </a>

        <a href="tracnghiemTF.html" style="text-decoration: none;">
            <button type="button" style="background:#1a73e8; color:white; border:none; border-radius:6px; padding: 8px 12px; cursor:pointer; font-weight:600; font-size:12px; text-transform: uppercase; transition: background 0.2s;">
                Trắc nghiệm Đúng/Sai
            </button>
        </a>

        <a href="generatequestion.html" style="text-decoration: none;">
            <button type="button" style="background:#f2994a; color:white; border:none; border-radius:6px; padding: 8px 12px; cursor:pointer; font-weight:600; font-size:12px; text-transform: uppercase; transition: 0.3s; box-shadow: 0 2px 4px rgba(242, 153, 74, 0.3);">
                Tạo câu hỏi
            </button>
        </a>

        <a href="LC.html" style="text-decoration: none;">
            <button type="button" style="background:#34a853; color:white; border:none; border-radius:6px; padding: 8px 12px; cursor:pointer; font-weight:600; font-size:12px; text-transform: uppercase; transition: background 0.2s;">
                Soạn TN Lựa chọn
            </button>
        </a>

        <a href="TF.html" style="text-decoration: none;">
            <button type="button" style="background:#34a853; color:white; border:none; border-radius:6px; padding: 8px 12px; cursor:pointer; font-weight:600; font-size:12px; text-transform: uppercase; transition: background 0.2s;">
                Soạn TN Đúng/Sai
            </button>
        </a>
    </nav>

    <!-- Footer-like Info -->
    <div style="margin-left: auto; font-size: 13px; color: #70757a;">
        &copy; 2026 <strong style="color: #3c4043;">Trần Việt Anh</strong>
    </div>
</header>
`;
document.getElementById('my-header').innerHTML = headerContent;
