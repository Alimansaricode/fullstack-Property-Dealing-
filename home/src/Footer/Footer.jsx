import React from 'react'

function Footer() {
  return (
    <div className='mt-10'>
      <footer className="footer sm:footer-horizontal bg-white text-black p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item bg-white mx-15 border-2 px-4 border-black mr-1" />
        <button className="btn btn-primary join-item  bg-[#338584] hover:bg-[#006766] text-black rounded-3xl px-3 mx-6 mx-18">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </div>
  )
}

export default Footer
