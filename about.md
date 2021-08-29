---
layout: about
title: About
menu: true
order: 10
---

## 소개

안녕하세요, 저는 꼬마 개발 꿈나무입니다.  
  
공부하면서 **자료를 정리하여 끄적일 용도**로 블로그를 제작 하였습니다.  
코딩을 **처음부터 공부하시는 분들**이  
저와 함께 공부하시는 데 도움이 되었으면 좋겠습니다.  

공부하면서 정리하는 포스팅이라서 예전에 올렸던 글 하나라도  
같은 내용에 새로 알게 된 점이 생긴다면 계속해서 수정을 할 생각입니다.  

공부하면서 정리하는 자료들이라 잘못된 정보가 있을 수도 있습니다.  
말씀 해주시면 바로 수정할 수 있도록 하겠습니다.
  
</br>
  
<!-- Include the library. -->
<script
  src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"
></script>

<!-- Optionally, include the theme (if you don't want to struggle to write the CSS) -->
<link
   rel="stylesheet"
   href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
/>

<!-- Prepare a container for your calendar. -->
<div class="calendar">
    <!-- Loading stuff -->
    Loading the data just for you.
</div>

<script>
    GitHubCalendar(".calendar", "hminkim");
    // or enable responsive functionality
    GitHubCalendar(".calendar", "hminkim", { responsive: true });
</script>



<!-- <script>
    GitHubCalendar(".calendar", "hminkim", { responsive: true, tooltips: true, global_stats: true}).then(function() {
        // delete the space underneath the module bar which is caused by minheight 
        document.getElementsByClassName('calendar')[0].style.minHeight = "70px";
        // hide more and less legen below the contribution graph
        document.getElementsByClassName('contrib-legend')[0].style.display = "none";
    });
</script> -->