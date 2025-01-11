<script lang="ts">
    let { class: className = '' , children , top = false , bottom = true , sidePadding = true } = $props()
</script>

<div class="flex flex-col items-center justify-center {className}">
    <div class="w-full max-w-[1440px] px-4 md:px-8">
        <div 
        class:border-t={top}
        class:border-b={bottom}
        class:px-4={sidePadding}
        class="w-full border-black border-x">
            {@render children()}
        </div>
    </div>
</div>