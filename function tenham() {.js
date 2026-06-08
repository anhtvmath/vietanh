function tenham() {
        var options = [
        "{\\True Phương án đúng}",
        "{Phương án sai 1}",
        "{Phương án sai 1}",
        "{Phương án sai 1}"
        ];
        shuffle(options);
        return "\\begin{ex}\n" +
            "Nội dung đề bài\n" +
            "\\choice\n" +
            options[0] + "\n" +
            options[1] + "\n" +
            options[2] + "\n" +
            options[3] + "\n" +
            "\\loigiai{Nội dung lời giải}\n" +
            "\\end{ex}\n\n";
    }