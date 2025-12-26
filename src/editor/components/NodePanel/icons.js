const svgModules = import.meta.glob(
    '../../../assets/iconfont/svg/*.svg',
    {
        eager: true,
        query: '?raw',
        import: 'default'
    }
)

function normalizeSvg(svg) {
    if (!svg) return ''
    // 替换已有 fill/stroke 为 currentColor
    svg = svg
        .replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"')
        .replace(/stroke="(?!none)[^"]*"/gi, 'stroke="currentColor"')

    // 对没有 fill 的路径加 fill="currentColor"
    svg = svg.replace(/<([a-z]+)([^>]*?)\/?>/gi, (match, tag, attrs) => {
        const selfClosing = match.endsWith('/>') ? '/>' : '>'
        // 只处理 path、circle、rect、polygon、polyline
        if (!/(fill=)/i.test(attrs) && /^(path|circle|rect|polygon|polyline)$/i.test(tag)) {
            return `<${tag}${attrs} fill="currentColor"${selfClosing}`
        }
        return match
    })

    return svg
}


export const iconList = Object.entries(svgModules).map(([path, svg]) => ({
    name: path.split('/').pop().replace('.svg', ''),
    svg: normalizeSvg(svg)
}))

