<template>
    <!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>莊柏軒的作品集</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
</head>
<body class="font-sans leading-relaxed text-gray-800">

  <!-- Hero 區塊 -->
  <section class="hero bg-gradient-to-r from-blue-100 to-blue-300 py-20 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold mb-4">嗨，我是莊柏軒</h1>
      <p class="text-xl text-gray-700 mb-6">一位熱愛系統開發與創新應用的資訊人</p>
      <a href="#portfolio" class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">查看我的作品</a>
    </div>
  </section>

  <!-- 關於我摘要 -->
  <section class="about py-16 bg-white">
    <div class="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <img src="../assets/banner.jpg" alt="個人照片" class="rounded-2xl shadow-lg w-full max-w-sm mx-auto md:mx-0" />
      <div>
        <h2 class="text-2xl font-semibold mb-4">關於我</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          我目前就讀於樹德科技大學資訊管理系，專注於系統分析、網站設計、文宣製作、影音剪輯等多種項目。曾參與經濟部DIGI+實習、全國技能競賽，並熱衷於推廣電競管理系統的應用。
        </p>
        <a href="/about" class="text-blue-600 hover:underline">查看更多</a>
      </div>
    </div>
  </section>

  <!-- 精選作品 -->
  <section id="portfolio" class="portfolio py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-center mb-10">精選作品</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- 作品卡片 1 -->
        <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
          <img src="../assets/project1.jpg" alt="作品圖1" class="rounded mb-4 transform hover:scale-105 transition duration-300">
          <h3 class="text-xl font-semibold mb-2">電競戰隊管理系統</h3>
          <p class="text-gray-600 text-sm"> 透過C#程式語言內的ASP.NET框架進行開發，其系統功能能夠提供戰隊管理經營層面的使用者進行選手的相關數據新增、管理，而戰隊選手方面，選手可以透過系統內的出缺勤系統，紀錄選手每次訓練得時間及內容等等。</p>
          <a href="#" class="text-blue-500 mt-2 inline-block hover:underline">了解更多 →</a>
        </div>

        <!-- 作品卡片 2 -->
        <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
          <img src="../assets/project2.jpg" alt="作品圖2" class="rounded mb-4 transform hover:scale-105 transition duration-300">
          <h3 class="text-xl font-semibold mb-2">智慧物聯網系統開發</h3>
          <p class="text-gray-600 text-sm"> 透過Python程式語言及YOLOv8人流辨識技術和Flask網站進行開發，並透過MySQL資料庫儲存人流相關數據，其系統是透過人流辨識的技術，可以算出該區域內有多少人流，產生出多少的人流碳排量，讓企業能透過此系統了解人流碳盤的資訊。</p>
          <a href="#" class="text-blue-500 mt-2 inline-block hover:underline">了解更多 →</a>
        </div>

        <!-- 作品卡片 3 -->
        <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
          <img src="../assets/project3.jpg" alt="作品圖3" class="rounded mb-4 transform hover:scale-105 transition duration-300">
          <h3 class="text-xl font-semibold mb-2">磨課師線上課程製作</h3>
          <p class="text-gray-600 text-sm">磨課師課程是從拍攝課程影片到透過PR剪輯軟體並剪輯加上後製後，並讓學生能夠透過影片更了解課程內容等。</p>
          <a href="#" class="text-blue-500 mt-2 inline-block hover:underline">了解更多 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="cta py-16 bg-blue-600 text-white text-center relative">
    <div class="absolute inset-0 opacity-10 bg-[url('/img/bg-pattern.svg')] bg-cover bg-center"></div>
    <div class="relative z-10">
      <h2 class="text-2xl font-semibold mb-4">對我有興趣？</h2>
      <p class="mb-6">歡迎聯絡我或透過社群平台進一步交流！</p>
      <a href="/contact" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">聯絡我</a>
    </div>
  </section>

</body>
</html>

</template>