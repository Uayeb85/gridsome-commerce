<template>
    <Layout>
      <!-- Seccion productos -->
    <section class="bg-gray-200 pb-10">
      <div class="flex items-center justify-center pt-8 pb-8">
       <h2 class="text-4xl">Productos</h2>
      </div>
    <!-- Tarjetas -->

      <div class="flex justify-around flex-wrap ">
        <div v-for="edge in $page.allProduct.edges"
          :key="edge.node.id"
          class="rounded-lg 
                mt-4 mb-4
                ml-2 mr-2 
                lg:w-1/5
                md:w-1/2
                w-full">

         <div>
           <g-image :src="edge.node.featuredImage"  class="rounded-t-md" />
         </div> 
          <div 
          class="bg-white 
                 border
                 border-gray-600
                 pb-4
                 rounded-b-md">
          <h3 class="text-gray-500 
                    text-xs 
                    tracking-widest 
                    title-font 
                    mt-1 mb-1 
                    pl-3">
            {{edge.node.title}}
          </h3>
          <h2 class="text-gray-900 
                    title-font 
                    text-lg 
                    font-medium 
                    pl-3">
            {{edge.node.description}}
          </h2>
          <p class="mt-1 pl-3">
            $ {{edge.node.price}}
          </p>
         <g-link :to="edge.node.path"> <button class="mt-3 
                        text-white 
                        bg-teal-500 
                        border-0 
                        py-2 px-6 
                        ml-3
                        focus:outline-none 
                        hover:bg-teal-600 
                        rounded">
          Conoce más
          </button> </g-link> 
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-6">
      <Pager :info="$page.allProduct.pageInfo" class="pager text-sm"  />

      </div>

    </section>
 
    </Layout>

</template>

<page-query>
query($page:Int){
  allProduct(perPage:8, page:$page) @paginate{
    pageInfo{
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        featuredImage
        description
        price
        path
      }
    }
  }
}
</page-query>

<script>
import {Pager} from 'gridsome'

export default {
  components:{
    Pager
  }
}
</script>

<style scoped>

.pager{
  letter-spacing: 15px;
}

</style>
