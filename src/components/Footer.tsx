import '../styles/footer.scss'

export function Footer(){
    return(
      <footer>
        <span>Developed by</span>
          <div className="social">
            <a href="https://github.com/juliomacedo89">
              <img src="/github.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/j%C3%BAlio-macedo-6ab034180/">
              <img src="/linkedin.png" alt="" />
            </a>
          </div>
    </footer>
    )
}