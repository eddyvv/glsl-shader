#ifdef GL_ES
/* 内存精度 */
precision mediump float;
#endif
/* 归一化坐标 */
uniform vec2 u_resolution;

void main()
{
    vec2 st = gl_FragCoord.xy/u_resolution - 0.5;


    /* 取长度 */
    float lengthV = length(st);

    /* 超过0.5的部分 */
    float stepV=1.0 - step(0.5, lengthV);
    /* 输出颜色 */
    gl_FragColor = vec4(stepV, stepV, stepV, 1.0);

}
