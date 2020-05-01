import React, { Fragment } from "react";
import Status from "./Status";
import Icon from "../components/Icon/Icon";

import style from "../components/Message/Message.scss"

const StatusMessage = {
  [Status.EMPTY]: <p className={style["message__text"]}>Suelta tu foto aquí o toca para seleccionar.</p>,
  [Status.LOADING]:<Icon name="loading" size={48}/>,
  [Status.DRAGOVER]: (
    <Fragment>
      <Icon name="upload" size={48}/>
      <p className={style["message__text"]}>Suelta tu foto</p>
    </Fragment>
  ),
  [Status.INVALID_FILE_TYPE]: (
    <Fragment>
      <p className={style["message__text"]}>Solo estan permitidas imagenes.</p>
      <p className={style["message__text"]}>Suelta tu foto aquí o toca para seleccionar.</p>
    </Fragment>
  ),
  [Status.INVALID_IMAGE_SIZE]: (
    <Fragment>
      <p className={style["message__text"]}>Tu foto debe ser más grande que 350px.</p>
      <p className={style["message__text"]}>Suelta tu foto aquí o toca para seleccionar.</p>
    </Fragment>
  ),
  [Status.LOADED]: null
};

export default StatusMessage;
