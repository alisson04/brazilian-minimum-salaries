<script>
import _ from 'lodash'
import 'font-awesome/css/font-awesome.min.css'

export default {
  name: 'App',
  data() {
    return { resizeKey: 0 }
  },
  mounted() {
    this.debouncedInputHandler = _.debounce(this.handleResize, 500)
    window.addEventListener('resize', this.debouncedInputHandler)
  },
  methods: {
    handleResize() {
      this.resizeKey += 1
    }
  }
}
</script>

<template>
  <main class="container pt-3">
    <h1 class="text-center text-secondary">Salário mínimo - Histórico e projeções</h1>

    <nav>
      <div class="nav nav-underline">
        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-history">
          Histórico
        </button>
        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-projection">
          Projeções
        </button>
      </div>
    </nav>

    <div class="tab-content" :key="resizeKey">
      <div class="tab-pane fade show active p-2" id="nav-history">
        <MinimumSalaryReal />
        <MinimumSalaryRealPercentage />
      </div>
      <div class="tab-pane fade" id="nav-projection">
        <MinimumSalaryRealAverageGrowth />
        <MinimumSalaryRealArithmeticSequence />
      </div>
    </div>

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
  </main>
</template>
