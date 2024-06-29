import styles from "@/components/footer.modules.css";

const Footer = () => {
  return (
    <footer>
          <div className="footer-container">
                <div className="footer-column">
                    <h6>Hobbycue</h6>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our services</a></li>
                        <li><a href="#">Work with us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h6>How do I</h6>
                    <ul>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Add a Listing</a></li>
                        <li><a href="#">Claim Listing</a></li>
                        <li><a href="#">Post a Query</a></li>
                        <li><a href="#">Add a Blog Post</a></li>
                        <li><a href="#">Other Queries</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h6>Quick Links</h6>
                    <ul>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">Blog Posts</a></li>
                        <li><a href="#">Shop/Store</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h6>Social Media</h6>
                    <ul>
                        <li>
                            <ul className="social-list">
                        <li><a href="#">
                            <img src="Group 60.png" alt="" />
                            </a></li>
                        <li><a href="#">
                        <img src="Group 61.png" alt="" />
                            </a></li>
                        <li><a href="#">
                        <img src="Group 62.png" alt="" />
                            </a></li>
                        <li><a href="#">
                        <img src="Group 63.png" alt="" />
                            </a></li>
                        <li><a href="#">
                        <img src="Group 59.png" alt="" />
                            </a></li>
                        <li><a href="#">
                        <img src="Group 58.png" alt="" />
                            </a></li>
                        <li><a href="#">
                        <img src="Group 57.png" alt="" />
                            </a></li>
                        <li><a href="#">
                        <img src="Group 56.png" alt="" />
                            </a></li>
                            </ul>
                        </li>
                        
                    </ul>
                    <h6>Invite Friends</h6>
                    <form className="flex-form">
        <input type="search" placeholder="Email ID" className="input1"/>
        <input type="submit" value="Invite"/>
      </form>
                </div>

                
            </div>
            
            <div className="final-footer">
                &copy; Purple Cues Private Limited
                </div>
        </footer>
    
  )
}

export default Footer
