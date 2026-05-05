const headerContent = `
<header style="display: flex; align-items: center; gap: 10px;">
    <span style="font-size: 16px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
        <strong>LaTex Pro X</strong> - Hệ thống hỗ trợ giảng dạy
    </span>

    <a href="tracnghiemLC.html" style="text-decoration: none; margin-left: 10px;">
        <button type="button" style="background:#1a73e8; color:white; border:none; border-radius:4px; padding:4px 12px; cursor:pointer; font-weight:bold; font-size:12px; text-transform: uppercase; height: 16px;">
            Trắc nghiệm lựa chọn 
        </button>
    </a>

    <a href="tracnghiemTF.html" style="text-decoration: none;">
        <button type="button" style="background:#1a73e8; color:white; border:none; border-radius:4px; padding:4px 12px; cursor:pointer; font-weight:bold; font-size:12px; text-transform: uppercase; height: 16px;">
            Trắc nghiệm Đúng Sai 
        </button>
    </a>

    <a href="taocauhoi.html" style="text-decoration: none;">
        <button type="button" style="background:#1a73e8; color:white; border:none; border-radius:4px; padding:1px 3px; cursor:pointer; font-weight:bold; font-size:12px; text-transform: uppercase; height: 16px;">
            Tạo câu hỏi 
        </button>
    </a>

    <a href="LC.html" style="text-decoration: none;">
        <button type="button" style="background:#1a73e8; color:white; border:none; border-radius:4px; padding:4px 12px; cursor:pointer; font-weight:bold; font-size:12px; text-transform: uppercase; height: 16px;">
            Soạn trắc nghiệm lựa chọn
        </button>
    </a>

    <a href="TF.html" style="text-decoration: none;">
        <button type="button" style="background:#1a73e8; color:white; border:none; border-radius:4px; padding:4px 12px; cursor:pointer; font-weight:bold; font-size:12px; text-transform: uppercase; height: 16px;">
            Soạn trắc nghiệm đúng sai 
        </button>
    </a>
    
    <span style="font-size: 16px; opacity: 0.8; font-weight: normal; margin-left: auto;">
        &copy; 2026 <strong>Trần Việt Anh</strong>. All Rights Reserved.
    </span>
</header>
`;
document.getElementById('my-header').innerHTML = headerContent;
