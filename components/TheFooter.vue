<template>
  <footer class="bg-black py-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-poppins font-bold text-xl mb-4 text-white">TrackInvest</h3>
          <p class="text-gray-300">Investment tracking simplified for everyone.</p>
        </div>
        <div>
          <h4 class="font-poppins font-semibold mb-4 text-white">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-accent transition">Home</a></li>
            <li><a href="#features" class="text-gray-300 hover:text-accent transition">Features</a></li>
            <li><a href="#benefits" class="text-gray-300 hover:text-accent transition">Benefits</a></li>
            <li><a href="#faq" class="text-gray-300 hover:text-accent transition">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-poppins font-semibold mb-4 text-white">Legal</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-accent transition">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-300 hover:text-accent transition">Terms of Service</a></li>
            <li><a href="#" class="text-gray-300 hover:text-accent transition">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-poppins font-semibold mb-4 text-white">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-accent transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-accent transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-accent transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 18.6h-2.472v-3.9c0-.918-.018-2.1-1.278-2.1-1.28 0-1.476 1.002-1.476 2.037v3.963H9.318V9.6h2.376v1.086h.033c.33-.624 1.134-1.284 2.334-1.284 2.496 0 2.955 1.644 2.955 3.78v5.418zM7.116 8.514c-.792 0-1.44-.648-1.44-1.44s.648-1.44 1.44-1.44 1.44.648 1.44 1.44-.648 1.44-1.44 1.44zm1.236 10.086H5.88V9.6h2.472v9z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-white/10 text-center">
        <p class="text-gray-300">&copy; {{ new Date().getFullYear() }} TrackInvest. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>