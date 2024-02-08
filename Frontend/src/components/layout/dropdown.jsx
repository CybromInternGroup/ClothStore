import "./dropdown.css";


const Dropdown=()=>{

    // xMegaMenu('#mega-menu', {
    //     responseWidth: 1000,
    //     isRtl: true,
    //     mainTitle: '🖤 xStack menu 🖤',
    //     blurEffect: true,
    //     disableLinks: true,
    //     fixedTop: true,
    //     onCloseSideMenu: function () {
    //         console.log('closed');
    //     },
    //     onOpenSideMenu: function () {
    //         console.log('opened');
    //     }
    // });

    return
    <>
    <nav>
    <ul id="mega-menu">
        <li>
            <a href="#">
                <img src="https://assets.ubuntu.com/v1/ff6a9a38-ubuntu-logo-2022.svg" alt="" />
            </a>
        </li>
        <li>
            <a href="#">
                menu item 1
            </a>
            <ul>
                <li>
                    <h3>
                        sub item 1
                    </h3>
                    <ul>
                        <li><a href="#">sub sub item 01</a></li>
                        <li><a href="#">sub sub item 02</a></li>
                        <li><a href="#">sub sub item 03</a></li>
                        <li><a href="#">sub sub item 04</a></li>
                        <li><a href="#">sub sub item 05</a></li>
                    </ul>
                </li>
                <li>
                    <h3>
                        sub item 2
                    </h3>
                    <ul>
                        <li><a href="#">sub sub item 01</a></li>
                        <li><a href="#">sub sub item 02</a></li>
                        <li>
                            <a href="#">sub sub item 03 has</a>
                            <ul>
                                <li><a href="#">sub sub sub item 001</a></li>
                                <li><a href="#">sub sub sub item 002</a></li>
                                <li><a href="#">sub sub sub item 003</a></li>
                                <li>
                                    <a href="#">
                                        sub sub sub item 004 has sub
                                    </a>
                                    <ul>
                                        <li><a href="#">sub sub sub item 001</a></li>
                                        <li><a href="#">sub sub sub item 002</a></li>
                                        <li><a href="#">sub sub sub item 003</a></li>
                                        <li><a href="#">sub sub sub item 004</a></li>
                                        <li><a href="#">sub sub sub item 005</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">sub sub sub item 005 has too</a>
                                    <ul>
                                        <li><a href="#">sub sub sub item 001</a></li>
                                        <li><a href="#">sub sub sub item 002</a></li>
                                        <li><a href="#">sub sub sub item 003</a></li>
                                        <li><a href="#">sub sub s item 004</a></li>
                                        <li><a href="#">sub sub sub item 005</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">sub sub item 04</a></li>
                        <li><a href="#">sub sub item 05</a></li>
                    </ul>
                </li>
                <li>
                    <h3>
                        sub item 3
                    </h3>
                    <img src="https://assets.ubuntu.com/v1/ff6a9a38-ubuntu-logo-2022.svg" alt=""/>
                </li>
                <li class="x-highlight">
                    <h3>
                        This highlight section
                    </h3>
                    <br/>
                    <p>
                        Lorem ipsum siddharth sit amet, consectetur adipisicing elit. Animi autem doloremque ducimus enim
                        est et facilis iusto laboriosam magni molestiae molestias nesciunt obcaecati optio possimus
                        quam, quidem quos repudiandae sunt.
                    </p>
                </li>
            </ul>
        </li>
        <li>

            menu item 2

            <ul>
                <li>
                    <h3>
                        sub item 1
                    </h3>
                    <ul>
                        <li><a href="#">sub sub item 01</a></li>
                        <li><a href="#">sub sub item 02</a></li>
                        <li><a href="#">sub sub item 03</a></li>
                        <li><a href="#">sub sub item 04</a></li>
                        <li><a href="#">sub sub item 05</a></li>
                    </ul>
                </li>
                <li>
                    <h3>
                        sub item 3
                    </h3>
                    <img src="https://assets.ubuntu.com/v1/ff6a9a38-ubuntu-logo-2022.svg" alt=""/>
                </li>
                <li>
                    <h3>
                        sub item 1
                    </h3>
                    <ul>
                        <li><a href="#">sub sub item 01</a></li>
                        <li><a href="#">sub sub item 02</a></li>
                        <li><a href="#">sub sub item 03</a></li>
                        <li><a href="#">sub sub item 04</a></li>
                        <li><a href="#">sub sub item 05</a></li>
                    </ul>
                </li>

                <li class="x-highlight">
                    <h3>
                        This highlight section
                    </h3>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem doloremque ducimus enim
                        est et facilis iusto laboriosam magni molestiae molestias nesciunt obcaecati optio possimus
                        quam, quidem quos repudiandae sunt.
                    </p>
                </li>

            </ul>
        </li>
        <li>
            <a href="#">
                menu item 3
            </a>
        </li>
        <li>
            <a href="#">
                menu item 4
            </a>
        </li>
        <li>
            <a href="#">
                menu item 3
            </a>
        </li>
        <li>
            menu item 4
        </li>
        <li class="x-always-show x-small">
            🔍
        </li>
    </ul>
</nav>

<div class="links">
  <p>
   <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="30"/> : <a href="https://github.com/4xmen/x-mega-menu">https://github.com/4xmen/x-mega-menu</a>

  </p>
  <br/>
  <hr/>
  <br/>
 
  <p>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" width="30"/> : <a href="https://www.npmjs.com/package/x-mega-menu">https://www.npmjs.com/package/x-mega-menu</a>

  </p>
</div>

<img class="bg-image" width="110%" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FFree-Download-Abstract-Backgrounds-HD.jpg&f=1&nofb=1&ipt=37ab79bac14d6d50bc1f6fc7b56cde62c6129c772c8121cc9409b5941dc4db15&ipo=images"></img>
    
    
    </>
}

export default Dropdown;