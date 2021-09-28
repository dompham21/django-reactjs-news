import { Button } from 'antd'
import React from 'react'

function BlogContent() {
    return (
        <div className="blog-content">
            <div className="blog-layout-top">
                <Button className="blog-category flex flex-ai-c flex-jc-c">Sports</Button>
                <h2 className="blog-title">What Happened to Christian Pulisic?</h2>
                <div className="blog-meta flex">
                    <div className="date">May 19, 2021</div>
                    <div className="views">19 Views</div>
                </div>
            </div>
            <div className="blog-body">
                <img src="https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/kicking.jpg"/>
                <p>These experts make strong cases, and they satisfy my natural instinct not to go there. But I remain very interested in the reasons the ’20s appeal to our imagination right now. Of course, it’s the booze, the sex, and the parties. But it’s also a decade with a very strong identity—and I think that helps. Writing in the journal American Speech in 1951, Mamie J. Meredith argued that the ’20s boasted</p>
                <p>Anyway, let’s get to that fun. A very joyful book to read about the decade is Frederick Lewis Allen’s Only Yesterday: An Informal History of the 1920s, which Allen—a blueblood journalist and editor at Harper’s—published in 1931. The book chronicles all of the movement and motion that makes the decade sexy, and doesn’t seem to miss a fad.</p>
                <h3>What Will Be The Next Step to Complete?</h3>
                <p>The “new ’20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with ‘secular</p>
                <ul>
                    <li>Parents Are Fed Up With Their Kids’ Expensive Berry Habits</li>
                    <li>15 Mother’s Day Gifts for the Burned-Out Mom in Your Life</li>
                    <li>Really Though, What Jeans Are in Style Now?</li>
                    <li>Don’t Fall for Fertility Fearmongering About Trans Men</li>
                </ul>
            </div>
        </div>
    )
}

export default BlogContent
