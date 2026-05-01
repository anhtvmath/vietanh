const headerContent = `
<header style="display: flex; align-items: center; gap: 10px;">
    <span style="font-size: 16px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
        <strong>LaTex Pro X</strong> - Hệ thống hỗ trợ giảng dạy
    </span>
    <a href="newpage1.html" style="text-decoration: none; margin-left: 10px;">
        <button type="button" style="background:#34a853; color:white; border:none; border-radius:4px; padding:4px 12px; cursor:pointer; font-weight:bold; font-size:10px; text-transform: uppercase; height: 24px;">
            Trang mới 1 
        </button>
    </a>
    <a href="newpage2.html" style="text-decoration: none;">
        <button type="button" style="background:#34a853; color:white; border:none; border-radius:4px; padding:4px 12px; cursor:pointer; font-weight:bold; font-size:10px; text-transform: uppercase; height: 24px;">
            Trang mới 2 
        </button>
    </a>
    <a href="newpage3.html" style="text-decoration: none;">
        <button type="button" style="background:#34a853; color:white; border:none; border-radius:4px; padding:4px 12px; cursor:pointer; font-weight:bold; font-size:10px; text-transform: uppercase; height: 24px;">
            Trang mới 3 
        </button>
    </a>
    
    <span style="font-size: 16px; opacity: 0.8; font-weight: normal; margin-left: auto;">
        &copy; 2026 <strong>Trần Việt Anh</strong>. All Rights Reserved.
    </span>
</header>
`;
document.getElementById('my-header').innerHTML = headerContent;
