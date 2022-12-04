#ifdef GL_ES
/* 内存精度 */
precision mediump float;
#endif
/* 归一化坐标 */
uniform vec2 u_resolution;

void main()
{
    /* 屏幕坐标 */
    vec2 st = gl_FragCoord.xy/u_resolution - 0.5;
    vec3 color = vec3(1.0);

    /* 取长度 */
    float lengthV = length(st);
    float sphere = max(0.0,lengthV*2.0);

    /* 限定圆的区域 */
    /* 超过0.5的部分 */
    float sphereAlpha=step(0.5, sphere);
    /* 高光，限制高光范围在0~0.75之间 */
    color*= clamp(sphereAlpha, 0.0, 0.75);
    color+=(1.0 - length(st - vec2(-0.12, 0.12)) * 3.0)*(1.0 - sphereAlpha);

    /* 输出颜色 */
    gl_FragColor = vec4(color, 1.0);

}
