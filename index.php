<?php header('Content-Type: text/html; charset=utf-8'); ?>
<!doctype html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>VS Code</title>
	<style>
		html, body { height: 100%; margin: 0; }
		body {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #ffffff;
			color: #000000;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
		/* 약 10배 크기 (기본 16px 기준 약 160px) */
		h1 { font-size: 160px; line-height: 1; margin: 0; font-weight: 700; }
		@media (max-width: 700px) {
			/* 작은 화면에서는 너무 크면 축소 */
			h1 { font-size: 80px; }
		}
	</style>
</head>
<body>
	<h1>VS Code</h1>
</body>
</html>
