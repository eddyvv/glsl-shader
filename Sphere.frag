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
    /* 求亮斑 */
    //color=vec3((1.0 - length(st - vec2(-0.12, 0.12)) * 3.0))*(1.0 - sphereAlpha);

    color+=(1.0 - length(st - vec2(-0.12, 0.12)) * 3.0) * (1.0 - sphereAlpha);

    float reflight = 1.0-sphereAlpha;
        reflight*=smoothstep(0.3, 0.5, (length(st*0.5 + vec2(0.05, -0.08)))*2.0);
    reflight=clamp(reflight, 0.0, 1.0)*0.45;
    color+=reflight;
    //color=vec3(reflight);
    /* 求阴影部分 */
    float sha=smoothstep(0.5,0.65,length(st*vec2(0.2,1.0)+vec2(-0.05,0.22))*8.0);
        /* 阴影部分渐变 */
        sha+=(1.-smoothstep(0.7, 0.05,length(st*vec2(0.2,1.0)+vec2(-0.02,0.22))*6.))*0.5;

        /* 抠除阴影与球解除部分 */
        sha=clamp(sha+(1.-sphereAlpha),0.,1.);
    color*=sha;
    color=color*0.8+0.1;
    /* 输出颜色 */
    gl_FragColor = vec4(color, 1.0);

}
