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
  <DefaultHeader />

  <main>
    <div class="container">
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

      <div class="tab-content p-2" :key="resizeKey">
        <div class="tab-pane fade show active" id="nav-history">
          <MinimumSalaryReal />
          <MinimumSalaryRealPercentage />
        </div>
        <div class="tab-pane fade" id="nav-projection">
          <MinimumSalaryRealAverageGrowth />
          <MinimumSalaryRealArithmeticSequence />
        </div>
      </div>
    </div>
  </main>

  <DefaultFooter />
</template>
