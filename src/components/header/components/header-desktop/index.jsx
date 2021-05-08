import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Register from '../../../../fetured/Auth/components/Register';

Header_Desktop.propTypes = {};

function Header_Desktop(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="container hidden-991">
            <div className="header-desktop flex-box">
                <div className="header-logo-offcanvas flex-box align-item-center">
                    <Link
                        to="/#offcanvas-primary"
                        className="offcanvas-menu-toggle navigation-bar-btn js-offcanvas-toggle flex-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.382 17.528">
                            <g
                                id="Group_18419"
                                data-name="Group 18419"
                                transform="translate(-37 -41.472)"
                            >
                                <g
                                    id="Group_16806"
                                    data-name="Group 16806"
                                    transform="translate(10 -72.528)"
                                >
                                    <g id="menu" transform="translate(27 114)">
                                        <g id="Menu_1_" transform="translate(0 0)">
                                            <path
                                                id="Path_1405"
                                                data-name="Path 1405"
                                                d="M29.432,98.142H.949a.949.949,0,1,1,0-1.9H29.432a.949.949,0,1,1,0,1.9Z"
                                                transform="translate(0 -96.243)"
                                            />
                                            <path
                                                id="Path_1406"
                                                data-name="Path 1406"
                                                d="M.949,180.455H29.432a.949.949,0,0,1,0,1.9H.949a.949.949,0,0,1,0-1.9Z"
                                                transform="translate(0 -172.64)"
                                            />
                                            <path
                                                id="Path_1407"
                                                data-name="Path 1407"
                                                d="M121.252,264.667h18.989a.949.949,0,1,1,0,1.9H121.252a.949.949,0,0,1,0-1.9Z"
                                                transform="translate(-120.303 -249.038)"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    <div className="site-logo header-logo">
                        <Link to="/#">
                            <span className="logo-text">AppReact</span>
                        </Link>
                    </div>
                </div>
                <div className="flex-item-auto">
                    <div className="header-top">
                        <div className="header-top__inner flex-box align-item-center justify-content-space">
                            <span className="slogan">
                                Meet Newsblock. The Next Generation WordPress News Theme.
                            </span>
                            <div className="theme-switch flex-center">
                                <button
                                    className="theme-switch__button"
                                    id="theme-switch-toggle"
                                    role="switch"
                                    aria-checked="false"
                                    aria-label="Theme Switch"
                                >
                                    <span>
                                        <svg
                                            id="sunny-day"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                        >
                                            <path
                                                id="Path_1453"
                                                data-name="Path 1453"
                                                d="M102.893,183.46a.512.512,0,0,0-.512.512v1.455a.512.512,0,0,0,1.024,0v-1.455A.512.512,0,0,0,102.893,183.46Z"
                                                transform="translate(-95.394 -170.939)"
                                            />
                                            <path
                                                id="Path_1454"
                                                data-name="Path 1454"
                                                d="M102.893,2.482a.512.512,0,0,0,.512-.512V.515a.512.512,0,1,0-1.024,0V1.97A.512.512,0,0,0,102.893,2.482Z"
                                                transform="translate(-95.394 -0.003)"
                                            />
                                            <path
                                                id="Path_1455"
                                                data-name="Path 1455"
                                                d="M31.166,159.864l-1.029,1.029a.512.512,0,0,0,.724.724l1.029-1.029a.512.512,0,1,0-.724-.724Z"
                                                transform="translate(-27.94 -148.814)"
                                            />
                                            <path
                                                id="Path_1456"
                                                data-name="Path 1456"
                                                d="M160.22,32.043a.51.51,0,0,0,.362-.15l1.029-1.029a.512.512,0,1,0-.724-.724l-1.029,1.029a.512.512,0,0,0,.362.874Z"
                                                transform="translate(-148.809 -27.943)"
                                            />
                                            <path
                                                id="Path_1457"
                                                data-name="Path 1457"
                                                d="M2.479,102.907a.512.512,0,0,0-.512-.512H.512a.512.512,0,0,0,0,1.024H1.967A.512.512,0,0,0,2.479,102.907Z"
                                                transform="translate(0 -95.407)"
                                            />
                                            <path
                                                id="Path_1458"
                                                data-name="Path 1458"
                                                d="M185.42,102.395h-1.456a.512.512,0,1,0,0,1.024h1.456a.512.512,0,1,0,0-1.024Z"
                                                transform="translate(-170.932 -95.407)"
                                            />
                                            <path
                                                id="Path_1459"
                                                data-name="Path 1459"
                                                d="M31.173,31.894a.512.512,0,1,0,.724-.724l-1.029-1.029a.512.512,0,1,0-.724.724Z"
                                                transform="translate(-27.947 -27.945)"
                                            />
                                            <path
                                                id="Path_1460"
                                                data-name="Path 1460"
                                                d="M160.589,159.864a.512.512,0,0,0-.724.724l1.029,1.029a.512.512,0,0,0,.724-.724Z"
                                                transform="translate(-148.815 -148.814)"
                                            />
                                            <path
                                                id="Path_1461"
                                                data-name="Path 1461"
                                                d="M55.5,51.518A3.984,3.984,0,1,0,59.484,55.5,3.989,3.989,0,0,0,55.5,51.518Zm0,6.944a2.96,2.96,0,1,1,2.96-2.96A2.964,2.964,0,0,1,55.5,58.462Z"
                                                transform="translate(-48 -48.002)"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <nav className="navigation-bar js-sticky-header-holder">
                            <div className="navigation-bar__inner">
                                <div className="navigation-wrapper text-center navigation-bar__section js-priority-nav hidden-xs">
                                    <ul
                                        id="menu-main-menu"
                                        className="navigation navigation--main navigation--inline"
                                    >
                                        <li>
                                            <Link to="/#">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/#">Page 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/#">Page 2</Link>
                                        </li>
                                        <li>
                                            <Link to="/#">Page 3</Link>
                                        </li>
                                        <li>
                                            <Link to="/#">Page 4</Link>
                                        </li>
                                        <li>
                                            <Link to="/#">Page 5</Link>
                                        </li>
                                        <li>
                                            <Link to="/#">
                                                More <i class="fas fa-angle-down"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="navigation-bar__section navigation-bar__btn flex-box align-item-center">
                                    <button
                                        type="submit"
                                        className="navigation-bar-btn line-right btn-default js-search--full"
                                    >
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <button
                                        onClick={handleClickOpen}
                                        type="submit"
                                        className="navigation-bar-btn line-right btn-default js-search--full"
                                    >
                                        <i className="fas fa-user"></i>
                                    </button>

                                    <button
                                        type="submit"
                                        className="navigation-bar-btn btn-default js-search--full"
                                    >
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle id="form-dialog-title">Register</DialogTitle>

                <DialogContent>
                    <Register />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary">Sign Up</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Header_Desktop;
