import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classnames from 'classnames';
import styles from './item.module.scss';

import ItemCard from 'csssr-school-product-card';
import ItemRating from '../item-rating';
import Price from '../price';

const Item = props => {
  const { item = {} } = props;
  const { title = 'Товар не найден' } = item;

  return (
    <div className={classnames(styles.Item)}>
      <div className={classnames(styles.ItemWrapper)}>
        <Link
          to="/"
          onClick={props.goBack}
          className={classnames(styles.ItemLink)}
        >
          <svg width={18} height={12}>
            <title>arrow</title>
            <path
              d="M18 5H3.83l3.58-3.59L6 0 0 6l6 6 1.41-1.41L3.83 7H18V5z"
              fill="var(--fill, black)"
            />
          </svg>
        </Link>
        <h3 className={classnames(styles.ItemHeader)}>{title}</h3>
      </div>
      {Object.entries(item).length !== 0 ? (
        <ItemCard
          isInStock={item.isInStock}
          img={item.img}
          title={title}
          maxRating={item.maxRating}
          rating={item.rating}
          price={<Price price={item.price} />}
          subPriceContent={
            item.subPriceContent ? (
              <Price price={item.subPriceContent} isPrimary={false} />
            ) : (
              ''
            )
          }
          ratingComponent={ItemRating}
        />
      ) : (
        <div>
          <svg width="512" height="512" fill="none">
            <g opacity="0.5">
              <path
                d="M427.884 232.017C427.884 137.093 350.931 60.14 256.007 60.14C161.082 60.14 84.129 137.093 84.129 232.017C84.129 293.083 116.067 346.545 164.072 377V387.906H183.948H328.056H348.127V376.89C396.023 346.404 427.884 293.005 427.884 232.017Z"
                fill="#E0E4EC"
              />
              <path
                d="M275.75 179.715C275.75 197.382 259.637 211.692 239.776 211.692C219.907 211.692 203.802 197.382 203.802 179.715C203.802 162.048 219.907 147.737 239.776 147.737C259.637 147.737 275.75 162.047 275.75 179.715Z"
                fill="#F6BB42"
              />
              <path
                d="M353.608 136.659C348.924 141.344 337.471 137.479 328.025 128.025C318.571 118.579 314.707 107.118 319.382 102.434C324.067 97.7579 335.527 101.615 344.982 111.069C354.429 120.515 358.285 131.975 353.608 136.659Z"
                fill="#F6BB42"
              />
              <path
                d="M350.135 305.559C346.271 301.702 347.528 294.176 352.93 288.774C358.34 283.356 365.858 282.107 369.723 285.963C373.587 289.835 372.338 297.346 366.936 302.779C361.518 308.166 353.999 309.415 350.135 305.559Z"
                fill="#F6BB42"
              />
              <path
                d="M155.836 247.666C155.836 254.294 150.473 259.665 143.845 259.665C137.224 259.665 131.853 254.294 131.853 247.666C131.853 241.046 137.224 235.675 143.845 235.675C150.473 235.675 155.836 241.046 155.836 247.666Z"
                fill="#F6BB42"
              />
              <path
                d="M243.773 339.597C243.773 344.016 238.409 347.607 231.781 347.607C225.16 347.607 219.789 344.016 219.789 339.597C219.789 335.194 225.16 331.603 231.781 331.603C238.41 331.603 243.773 335.193 243.773 339.597Z"
                fill="#F6BB42"
              />
              <path
                d="M275.75 179.715C275.75 197.382 259.637 211.692 239.776 211.692C219.907 211.692 203.802 197.382 203.802 179.715C203.802 162.048 219.907 147.737 239.776 147.737C259.637 147.737 275.75 162.047 275.75 179.715Z"
                fill="#F5F6FA"
              />
              <path
                d="M353.608 136.659C348.924 141.344 337.471 137.479 328.025 128.025C318.571 118.579 314.707 107.118 319.382 102.434C324.067 97.7579 335.527 101.615 344.982 111.069C354.429 120.515 358.285 131.975 353.608 136.659Z"
                fill="#F5F6FA"
              />
              <path
                d="M350.135 305.559C346.271 301.702 347.528 294.176 352.93 288.774C358.34 283.356 365.858 282.107 369.723 285.963C373.587 289.835 372.338 297.346 366.936 302.779C361.518 308.166 353.999 309.415 350.135 305.559Z"
                fill="#F5F6FA"
              />
              <path
                d="M155.836 247.666C155.836 254.294 150.473 259.665 143.845 259.665C137.224 259.665 131.853 254.294 131.853 247.666C131.853 241.046 137.224 235.675 143.845 235.675C150.473 235.675 155.836 241.046 155.836 247.666Z"
                fill="#F5F6FA"
              />
              <path
                d="M243.773 339.597C243.773 344.016 238.409 347.607 231.781 347.607C225.16 347.607 219.789 344.016 219.789 339.597C219.789 335.194 225.16 331.603 231.781 331.603C238.41 331.603 243.773 335.193 243.773 339.597Z"
                fill="#F5F6FA"
              />
              <path
                d="M347.941 467.849L323.958 491.832H188.047L164.072 467.849V387.906H347.941V467.849Z"
                fill="#F5F6FA"
              />
              <path
                d="M180.061 387.906H164.072V467.849L188.047 491.832H204.036L180.061 467.849V387.906Z"
                fill="#FEFEFF"
              />
              <path
                d="M331.944 387.906H347.934V467.849L323.958 491.832H307.97L331.944 467.849V387.906Z"
                fill="#E0E4EC"
              />
              <path
                d="M108.112 232.017C108.112 141.141 178.686 66.928 267.998 60.745C264.017 60.472 260.051 60.14 256.007 60.14C161.082 60.14 84.129 137.093 84.129 232.017C84.129 293.083 116.067 346.545 164.072 377C164.072 377 108.112 329.947 108.112 232.017Z"
                fill="white"
              />
              <path
                d="M404.689 232.017C404.689 141.141 334.107 66.928 244.803 60.745C248.777 60.472 252.742 60.14 256.794 60.14C351.719 60.14 428.671 137.093 428.671 232.017C428.671 293.083 396.726 346.545 348.729 377C348.729 377 404.689 329.947 404.689 232.017Z"
                fill="#F5F6FA"
              />
              <path
                d="M219.79 179.715C219.79 164.499 231.766 151.832 247.77 148.592C245.193 148.069 242.531 147.737 239.775 147.737C219.906 147.737 203.801 162.047 203.801 179.715C203.801 197.382 219.906 211.692 239.775 211.692C242.531 211.692 245.193 211.36 247.77 210.838C231.766 207.597 219.79 194.93 219.79 179.715Z"
                fill="#E0E4EC"
              />
              <path
                d="M336.02 128.025C326.566 118.579 322.702 107.118 327.377 102.434C327.924 101.892 328.572 101.494 329.282 101.173C325.136 100.014 321.53 100.291 319.383 102.434C314.707 107.119 318.571 118.579 328.026 128.025C336.38 136.386 346.287 140.348 351.705 137.92C346.809 136.546 341.133 133.143 336.02 128.025Z"
                fill="#E0E4EC"
              />
              <path
                d="M358.129 305.559C354.265 301.702 355.522 294.176 360.924 288.774C362.93 286.768 365.226 285.338 367.521 284.519C363.415 282.684 357.45 284.246 352.93 288.774C347.528 294.176 346.271 301.702 350.135 305.559C352.571 307.987 356.45 308.385 360.346 307.003C359.534 306.644 358.77 306.198 358.129 305.559Z"
                fill="#E0E4EC"
              />
              <path
                d="M139.847 247.666C139.847 242.455 143.196 238.06 147.842 236.408C146.585 235.963 145.258 235.675 143.845 235.675C137.224 235.675 131.853 241.046 131.853 247.666C131.853 254.294 137.224 259.665 143.845 259.665C145.258 259.665 146.585 259.377 147.842 258.932C143.196 257.28 139.847 252.885 139.847 247.666Z"
                fill="#E0E4EC"
              />
              <path
                d="M227.784 339.597C227.784 336.131 231.134 333.196 235.779 332.094C234.522 331.797 233.195 331.603 231.782 331.603C225.161 331.603 219.79 335.194 219.79 339.597C219.79 344.016 225.161 347.607 231.782 347.607C233.195 347.607 234.522 347.412 235.779 347.115C231.134 346.014 227.784 343.078 227.784 339.597Z"
                fill="#E0E4EC"
              />
              <rect
                x="256.007"
                y="12.174"
                width="35.974"
                height="15.989"
                fill="#E0E4EC"
              />
              <path
                d="M331.952 44.151H275.492L291.481 28.163H331.952L323.958 36.157L331.952 44.151Z"
                fill="#E0E4EC"
              />
              <path
                d="M212.038 491.832C212.038 491.832 224.029 507.82 256.007 507.82C287.984 507.82 299.975 491.832 299.975 491.832H212.038Z"
                fill="#F5F6FA"
              />
              <path
                d="M228.026 491.832H212.038C212.038 491.832 224.029 507.82 256.007 507.82C258.84 507.82 261.472 507.656 264.001 507.429C238.035 505.072 228.026 491.832 228.026 491.832Z"
                fill="#FEFEFF"
              />
              <path
                d="M283.986 491.832H299.974C299.974 491.832 287.983 507.82 256.006 507.82C253.164 507.82 250.541 507.656 248.011 507.429C273.971 505.072 283.986 491.832 283.986 491.832Z"
                fill="#E0E4EC"
              />
              <g opacity="0.5">
                <path
                  d="M23.2039 346.209C4.45194 346.209 2.01594 340.33 0.914944 337.676C-0.943057 333.18 -6.61005 319.487 66.1109 276.517C68.0239 275.401 70.4669 276.025 71.5839 277.93C72.7089 279.826 72.0759 282.279 70.1789 283.403C4.18694 322.391 8.10494 334.14 8.30094 334.615C8.50394 335.084 13.9999 346.099 87.6659 327.238C137.708 314.419 202.232 292.045 269.349 264.236C336.481 236.424 397.921 206.617 442.358 180.307C507.796 141.561 503.893 129.89 503.698 129.41C503.503 128.957 498.249 118.394 428.844 135.663C426.69 136.174 424.535 134.89 424.004 132.747C423.473 130.604 424.776 128.437 426.916 127.903C503.791 108.78 509.287 121.997 511.082 126.35C512.94 130.831 518.593 144.462 446.434 187.185C401.684 213.682 339.877 243.668 272.41 271.621C204.957 299.57 140.05 322.07 89.6479 334.982C56.6019 343.445 36.0619 346.209 23.2039 346.209Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M308.203 327.948C306.002 327.948 304.168 326.161 304.168 323.951C304.168 321.742 305.916 319.954 308.125 319.954H308.203C310.413 319.954 312.201 321.742 312.201 323.951C312.201 326.161 310.413 327.948 308.203 327.948Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M156.312 152.07C154.103 152.07 152.276 150.282 152.276 148.073C152.276 145.864 154.025 144.076 156.234 144.076H156.312C158.521 144.076 160.31 145.864 160.31 148.073C160.31 150.282 158.521 152.07 156.312 152.07Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M364.164 200.04C361.962 200.04 360.127 198.252 360.127 196.043C360.127 193.834 361.876 192.046 364.086 192.046H364.164C366.373 192.046 368.161 193.834 368.161 196.043C368.161 198.252 366.373 200.04 364.164 200.04Z"
                  fill="#7E8FA4"
                />
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M164.072 391.902H347.941C350.15 391.902 351.938 390.115 351.938 387.906V379.248C402.035 346.568 431.881 291.693 431.881 232.017C431.881 135.038 352.985 56.142 256.007 56.142C159.029 56.142 80.132 135.039 80.132 232.017C80.132 291.693 109.97 346.568 160.075 379.248V387.906C160.075 390.115 161.863 391.902 164.072 391.902ZM343.943 383.908H168.069V377.07C168.069 375.703 167.367 374.431 166.211 373.697C117.317 342.641 88.127 289.671 88.127 232.017C88.127 139.447 163.432 64.137 256.007 64.137C348.574 64.137 423.887 139.446 423.887 232.017C423.887 289.671 394.689 342.64 345.794 373.697C344.638 374.431 343.943 375.703 343.943 377.07V383.908Z"
                    fill="#7E8FA4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M188.047 495.829H323.958C325.02 495.829 326.035 495.407 326.784 494.658L350.767 470.675C351.516 469.926 351.937 468.911 351.937 467.849V387.907C351.937 385.697 350.15 383.909 347.941 383.909H164.072C161.863 383.909 160.075 385.697 160.075 387.907V467.849C160.075 468.91 160.496 469.926 161.246 470.675L185.221 494.658C185.971 495.407 186.985 495.829 188.047 495.829ZM322.303 487.834H189.702L168.069 466.193V391.902H343.944V466.193L322.303 487.834Z"
                    fill="#7E8FA4"
                  />
                  <path
                    d="M156.07 423.88C154.008 423.88 152.26 422.295 152.089 420.203C151.917 418.002 153.556 416.073 155.758 415.901L355.615 399.913C357.863 399.765 359.737 401.381 359.917 403.574C360.096 405.775 358.449 407.704 356.256 407.876L156.398 423.864C156.289 423.872 156.18 423.88 156.07 423.88Z"
                    fill="#7E8FA4"
                  />
                  <path
                    d="M156.07 447.863C154.008 447.863 152.26 446.278 152.089 444.185C151.917 441.984 153.556 440.056 155.758 439.884L355.615 423.895C357.863 423.715 359.737 425.355 359.917 427.556C360.096 429.758 358.449 431.687 356.256 431.859L156.398 447.847C156.289 447.855 156.18 447.863 156.07 447.863Z"
                    fill="#7E8FA4"
                  />
                  <path
                    d="M156.07 471.846C154.008 471.846 152.26 470.261 152.089 468.169C151.917 465.967 153.556 464.039 155.758 463.867L355.615 447.879C357.863 447.754 359.737 449.339 359.917 451.54C360.096 453.742 358.449 455.67 356.256 455.842L156.398 471.83C156.289 471.838 156.18 471.846 156.07 471.846Z"
                    fill="#7E8FA4"
                  />
                  <path
                    d="M256.007 511.817C222.413 511.817 209.376 494.946 208.837 494.228C207.51 492.463 207.869 489.957 209.641 488.63C211.397 487.311 213.896 487.669 215.215 489.41C215.699 490.035 226.722 503.822 256.007 503.822C285.321 503.822 296.337 489.996 296.79 489.41C298.133 487.669 300.646 487.334 302.388 488.661C304.137 489.988 304.488 492.471 303.168 494.227C302.629 494.946 289.592 511.817 256.007 511.817Z"
                    fill="#7E8FA4"
                  />
                </g>
                <path
                  d="M256.007 64.137C253.797 64.137 252.009 62.349 252.009 60.14V4.17998C252.009 1.97098 253.797 0.182983 256.007 0.182983C258.216 0.182983 260.004 1.97098 260.004 4.17998V60.14C260.004 62.349 258.216 64.137 256.007 64.137Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M291.98 16.171H256.006C253.796 16.171 252.008 14.383 252.008 12.174C252.008 9.965 253.796 8.177 256.006 8.177H291.98C294.19 8.177 295.978 9.965 295.978 12.174C295.979 14.383 294.19 16.171 291.98 16.171Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M291.98 32.16H256.006C253.796 32.16 252.008 30.372 252.008 28.163C252.008 25.954 253.796 24.166 256.006 24.166H291.98C294.19 24.166 295.978 25.954 295.978 28.163C295.978 30.372 294.19 32.16 291.98 32.16Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M291.98 32.16C289.771 32.16 287.983 30.372 287.983 28.163V12.174C287.983 9.965 289.771 8.177 291.98 8.177C294.19 8.177 295.978 9.965 295.978 12.174V28.163C295.979 30.372 294.19 32.16 291.98 32.16Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M275.992 48.148C274.97 48.148 273.947 47.757 273.166 46.977C271.604 45.415 271.604 42.886 273.166 41.325L289.154 25.336C290.716 23.775 293.246 23.775 294.806 25.336C296.368 26.898 296.368 29.427 294.806 30.988L278.818 46.977C278.037 47.758 277.015 48.148 275.992 48.148Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M331.952 48.1481H275.992C273.783 48.1481 271.995 46.3601 271.995 44.1511C271.995 41.9421 273.783 40.1541 275.992 40.1541H331.952C334.162 40.1541 335.949 41.9421 335.949 44.1511C335.949 46.3601 334.162 48.1481 331.952 48.1481Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M331.952 32.16H299.974C297.765 32.16 295.978 30.372 295.978 28.163C295.978 25.954 297.765 24.166 299.974 24.166H331.952C334.162 24.166 335.949 25.954 335.949 28.163C335.949 30.372 334.162 32.16 331.952 32.16Z"
                  fill="#7E8FA4"
                />
                <path
                  d="M331.952 48.1481C330.93 48.1481 329.907 47.7571 329.126 46.9771L321.132 38.9821C319.57 37.4211 319.57 34.8911 321.132 33.3301L329.126 25.3351C330.688 23.7741 333.217 23.7741 334.778 25.3351C336.34 26.8971 336.34 29.4261 334.778 30.9871L329.61 36.1551L334.778 41.3231C336.34 42.8851 336.34 45.4141 334.778 46.9751C333.998 47.7581 332.975 48.1481 331.952 48.1481Z"
                  fill="#7E8FA4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M200.046 180.054C200.046 199.891 217.979 216.028 240.018 216.028C262.057 216.028 279.989 199.891 279.989 180.054C279.989 160.217 262.057 144.08 240.018 144.08C217.979 144.08 200.046 160.217 200.046 180.054ZM208.041 180.054C208.041 164.628 222.382 152.074 240.018 152.074C257.646 152.074 271.995 164.628 271.995 180.054C271.995 195.48 257.646 208.034 240.018 208.034C222.382 208.034 208.041 195.48 208.041 180.054Z"
                  fill="#7E8FA4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M325.441 131.191C332.71 138.467 341.476 142.987 348.315 142.987C351.72 142.987 354.607 141.894 356.677 139.822C363.117 133.374 359.409 119.942 348.051 108.583C337.167 97.6881 323.037 93.7101 316.791 99.9521C310.35 106.4 314.074 119.832 325.441 131.191ZM322.443 105.604C323.123 104.924 324.294 104.784 325.152 104.784C329.032 104.784 335.863 107.707 342.398 114.235C350.977 122.819 353.273 131.922 351.024 134.174C350.345 134.853 349.173 134.994 348.315 134.994C344.443 134.994 337.619 132.07 331.093 125.539C322.498 116.955 320.203 107.852 322.443 105.604Z"
                  fill="#7E8FA4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M347.551 308.729C349.752 310.93 352.844 312.14 356.264 312.14C361.041 312.14 366.045 309.883 370.011 305.934C377.06 298.852 378.286 288.985 372.782 283.481C367.489 278.188 357.099 279.515 350.338 286.284C343.273 293.365 342.047 303.225 347.551 308.729ZM355.998 291.935C358.418 289.515 361.44 288.062 364.086 288.062C364.991 288.062 366.248 288.25 367.131 289.133C369.106 291.107 368.442 296.174 364.352 300.281C361.923 302.701 358.903 304.145 356.264 304.145C355.349 304.145 354.085 303.958 353.203 303.076C351.227 301.1 351.891 296.041 355.998 291.935Z"
                  fill="#7E8FA4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M128.097 248.006C128.097 256.827 135.264 264.002 144.086 264.002C152.9 264.002 160.075 256.827 160.075 248.006C160.075 239.187 152.9 232.017 144.086 232.017C135.264 232.017 128.097 239.188 128.097 248.006ZM136.091 248.006C136.091 243.599 139.675 240.012 144.086 240.012C148.489 240.012 152.081 243.599 152.081 248.006C152.081 252.417 148.489 256.008 144.086 256.008C139.675 256.008 136.091 252.417 136.091 248.006Z"
                  fill="#7E8FA4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M216.035 339.939C216.035 346.669 223.053 351.939 232.023 351.939C240.986 351.939 248.012 346.67 248.012 339.939C248.012 333.219 240.986 327.948 232.023 327.948C223.054 327.948 216.035 333.218 216.035 339.939ZM224.029 339.939C224.029 338.347 227.214 335.943 232.023 335.943C236.825 335.943 240.018 338.348 240.018 339.939C240.018 341.572 236.903 343.945 232.023 343.945C227.144 343.945 224.029 341.572 224.029 339.939Z"
                  fill="#7E8FA4"
                />
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

Item.propTypes = {
  item: propTypes.shape({
    isInStock: propTypes.bool,
    img: propTypes.string,
    title: propTypes.node,
    price: propTypes.node,
    subPriceContent: propTypes.node,
    maxRating: propTypes.number,
    rating: propTypes.number,
    discount: propTypes.number,
    category: propTypes.string
  })
};

export default Item;
