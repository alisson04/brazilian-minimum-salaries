<script>
export default {
  name: 'DefaultFooter',
  props: ['title']
}
</script>

<template>
  <footer class="d-flex justify-content-center pb-2 pt-4 mt-5 border-top">
    <a
      href="https://github.com/alisson04/brazilian-minimum-salaries"
      target="_blank"
      class="text-muted nav-link m-3"
    >
      <i class="fa fa-2x fa-github" aria-hidden="true" title="Ver no GitHub"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/alisson-fernandes-6b761a143/"
      target="_blank"
      class="text-muted nav-link m-3"
    >
      <i class="fa fa-2x fa-linkedin-square" aria-hidden="true" title="Ver meu Linkedin"></i>
    </a>
  </footer>
</template>

<style scoped></style>
