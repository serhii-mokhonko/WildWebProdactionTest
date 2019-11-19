<template>
  <b-container class="footer-block">
    <b-row class="footer-line position-relative">
      <img src="../assets/leaf-large.png" class="position-absolute leaf-large" alt="leaf" />
      <img src="../assets/leaf-smal-2.png" class="position-absolute leaf-small" alt="leaf" />
    </b-row>
    <b-row class="d-flex justify-content-between mb-4">
      <b-col>
        <ul class="footer-nav list-unstyled">
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Satisfaction guarantee</a>
          </li>
          <li>
            <a href="#">Become a retailer</a>
          </li>
          <li>
            <a href="#">Terms, Security & Privacy</a>
          </li>
        </ul>
      </b-col>
      <b-col class="social text-right">
        <ul class="footer-social list-unstyled">
          <li>
            <a href="#">
              <img src="../assets/Youtube.png" alt="youtube" srcset />
              <p class="d-inline ml-3">YouTube</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/Facebook.png" alt="facebook" srcset />
              <p class="d-inline ml-3">Facebook</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/Instagram.png" alt="instagram" srcset />
              <p class="d-inline ml-3">Instagram</p>
            </a>
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row class="footer-content d-flex flex-column mx-auto text-center">
      <b-col>
        <p>Our products are dietary supplements. Statements made about these products have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, cure or prevent any disease. Further, products are not intended for any unlawful purpose, and we disclaim any and all representations or references to any such purpose by any party including but not limited to distributors, retailers and consumers. Any discussion of illegal activity will end the conversation.</p>
      </b-col>
      <b-col class="copyright">
        <p>© Copyright 2019</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.footer-line {
  width: 100%;
  height: 5px;
  border-bottom: 3px solid #41b24f;
  margin-bottom: 65px;
}

.leaf-small {
  right: -90px;
  top: -6px;
  transform: rotate(29deg);
}

.leaf-large {
  right: -90px;
  top: -90px;
}

.footer-block {
  margin-top: 180px;
}

.footer-nav,
.footer-social {
  display: -webkit-inline-box;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
}

.footer-nav li,
.footer-social li {
  margin-right: 30px;
}

.footer-nav li a,
.footer-social li a {
  color: #1d2f1f;
  text-decoration: none;
}

/* .footer-social li a p {
  display: inline;
} */

.footer-content {
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
  color: #999999;
}

.copyright {
  font-size: 12px;
}
</style>