<template>
  <div id="resumePreview">
    <div class="header" >
      <div class="head">
        <div class="img" v-if="resume.profile && resume.profile['个人头像(链接)']">
          <img :src="resume.profile['个人头像(链接)']" alt="头像" width="100" height="100">
        </div>
        <h2>{{resume.profile['姓名']}}</h2>
        <p class="p-height">{{resume.profile['应聘职位']}}</p>
      </div>
      <ul class="message">
        <li v-if="resume.contacts && resume.contacts['city']">
          <i>
            <svg class="icon-resume"><use xlink:href="#icon-location"></use></svg>
          </i>
          <span>{{resume.contacts.city}}</span>
        </li>
        <li v-if="resume.contacts && resume.contacts['phone']">
          <i>
            <svg class="icon-resume"><use xlink:href="#icon-3-copy"></use></svg>
          </i>
          <span>{{resume.contacts.phone}}</span>
        </li>
        <li v-if="resume.contacts && resume.contacts['email']">
          <i>
            <svg class="icon-resume"><use xlink:href="#icon-1"></use></svg>
          </i>
          <span>{{resume.contacts.email}}</span>
        </li>
        <li v-if="resume.contacts && resume.contacts['QQ']">
          <i>
            <svg class="icon-resume"><use xlink:href="#icon-qq"></use></svg>
          </i>
          <span>{{resume.contacts.QQ}}</span>
        </li>
      </ul>

  </div>
  <div class="all-contents">
    <section class="about-me" v-if="resume.profile && resume.profile['个人介绍']">
      <div class="icons">
        <svg class="icon-resume"><use xlink:href="#icon-profile"></use></svg>
      </div>
      <div class="info">
        <h4 class="title">个人介绍</h4>
        <p class="border card p-height">{{resume.profile['个人介绍']}}</p>
      </div>
    </section>
    <section class="education" v-if="resume.education[0] && (resume.education[0]['毕业院校'] || resume.education[0]['专业'] || resume.education[0]['时间段'])">
      <div class="icons">
        <svg class="icon-resume"><use xlink:href="#icon-teach"></use></svg>
      </div>
      <div class="info">
        <h4 class="title">教育经历</h4>
        <div class="card border">
          <div v-for="(item,index) in resume.education">
            <p class="p-height">{{item['专业']}}  {{item['毕业院校']}}</p>
            <p class="p-height">{{item['时间段']}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="skills" v-if="resume.skills[0] && resume.skills[0]['技能类别']">
      <div class="icons">
        <svg class="icon-resume"><use xlink:href="#icon-tools"></use></svg>
      </div>
      <div class="info">
          <h4 class="title">职业技能</h4>
          <ul class="skill-list disc">
            <li v-for="(item,index) in resume.skills" class="skill card border">
              <h3 class="skill-head">{{item['技能类别']}}</h3>
              <ul class="skill-con circle">
                 <li v-for="list in item['技能列表']">{{list}}</li>
              </ul>
            </li>
          </ul>
      </div>
    </section>
    <section class="projects" v-if="resume.projects[0] && (resume.projects[0]['项目名称'] || resume.projects[0]['项目描述'] || resume.projects[0]['项目名称']||resume.projects[0]['项目源码']||resume.projects[0]['项目预览']  )">
      <div class="icons">
        <svg class="icon-resume"><use xlink:href="#icon-portfolio"></use></svg>
      </div>
      <div class="info">
        <h4 class="title">个人项目</h4>
        <ul class="disc">
          <li v-for="item in resume.projects" class="border card">
            <a :href="item['项目预览']" class="project-head">{{item['项目名称']}}</a>
            <p class="project-con p-height">{{item['项目描述']}}</p>
            <ul class="project-con circle">
              <li v-for="list in item['项目使用技术或功能']">{{list}}</li>
              <li>项目地址： <a :href="item['项目源码']">{{item['项目源码']}}</a></li>
              <li>预览地址： <a :href="item['项目预览']">{{item['项目预览']}}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <ul class="links" v-if="resume.links && (resume.links['技术博客'] || resume.links['GitHub'])">
      <p class="p-height">博客: <a :href="resume.links['技术博客']">{{resume.links['技术博客']}}</a></p>
      <p class="p-height">Github: <a :href="resume.links['GitHub']">{{resume.links['GitHub']}}</a></p>
    </ul>
  </div>
  </div>
</template>
<script>
  export default {
    computed:{
      resume(){
        return this.$store.state.resume
      }
    },
    methods:{
      filter(array){
        return array.filter(item => !this.isEmpty(item))
      },
      isEmpty(object){
        let empty = true
        for(let key in object){
          if(object[key]){
            empty=false
            break
          }
        }
        return empty
      }
    }
  }
</script>
<style>
  #resumePreview{
    border: 1px solid;
    flex:1;
    margin-left:8px;
    background:white;
    border-radius:5px;
    overflow:auto;
  }
  h1,h2,h3,h4{font-weight: normal;}
  ul.disc{list-style: disc;padding-left:40px;}
  ul.circle{list-style: circle;padding-left:40px;}
  a.project-head{text-decoration:none;color:#2291c3}
  a.project-head:hover{
    color: #23527c;
    text-decoration: underline;
  }
  p.p-height{line-height:1.8;}
  .icon-resume{
    width:25px;
    height:25px;
    vertical-align:middle;
  }
  .border{
    border-top:1px solid rgba(0,0,0,.3);
  }
  h4.title{
    font-size:18px;
    margin: 10px 0;
  }
  .card{
    padding: 10px 0;
  }
  .header{
    display: flex;
    flex-direction:column;
    align-items:center;
    border: 1px solid #e6e6e6;
    padding-top:20px;
  }
  .header .head{
    margin:0 auto;
    display: flex;
    flex-direction:column;
    align-items:center;
  }
  .header .head >h2{
    margin:5px 0;
  }
  header .head >p{
    margin:5px 0;
  }
  .header .head > .img{
    width: 100px;
    height: 100px;
    border: 1px solid;
    border-radius: 50%;
    overflow: hidden;
  }
  .header >.message{
    display: flex;
    list-style:none;
    margin:0 auto;
    padding:5px 0;
  }
  .header >.message > li{
    display: flex;
    align-items:center;
    padding:10px 0;
    margin-left:30px;
  }
  .header >.message > li:first-child{
    margin-left:0;

  }
  .header >.message > li > span{
    margin-left:10px;
    flex:1;
  }
  .all-contents{
    padding:0 20px;
    border: 1px solid #e6e6e6;
    margin-top: 10px;
  }
  section .icons{
    width:50px;
    padding:0 10px;
    margin-top:10px;
  }
  section .info{
    flex:1;
    padding: 0 10px;
  }
  .about-me{
    display: flex;
  }
  .education{
    display: flex;
  }
  .education .info{
    flex:1;
  }
  .skills{
    display: flex;
  }
  .skills h3.skill-head{
    font-size:16px;
    color:#2291c3;
  }
  .projects{
    display: flex;
  }
  .projects li > a{
    font-size:16px;
  }
  .links{
    display: flex;
    padding:20px 0;
    justify-content: space-around;
  }
  .skill-con,.project-con{
    margin-top:10px;
  }
</style>
