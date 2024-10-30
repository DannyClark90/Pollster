<script>
  import Logo from '../assets/icon.png'
</script>

<header
  class="z-10 fixed flex items-middle justify-start w-full xxs:h-[14%] xs:h-[15%] md:h-[14%] px-5 py-3 top-0"
>
  <svg
    class="absolute top-0 left-0 w-full h-full"
    viewBox="0 0 393 118"
    preserveAspectRatio="none"
  >
    <path
      d="M16.375 103.861L0 104.752V100V78V0H393L393 78L393 100L393 115.453L376.625 116.345C360.25 117.237 327.5 119.02 294.75 117.237C262 115.453 229.25 110.103 196.5 106.536C163.75 102.969 131 101.185 98.25 101.185C65.5 101.185 32.75 102.969 16.375 103.861Z"
      fill="#7A8D65"
    />
  </svg>

  <div class="z-10 w-full h-auto flex justify-center gap-6 items-center">
    <img
      class="h-[74%] w-auto z-10 mb-8"
      src={Logo}
      alt="Pollster Logo (green monster)"
    />

    <h1 class="md:h-fit font-h1 text-lg-h1 tracking-lg-h1 text-white size-fit drop-shadow-md">
      Pollster
    </h1>
  </div>
</header>
