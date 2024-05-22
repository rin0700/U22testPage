import React from "react";
import "../style/titleStyle.css";

const Title = () => {
  return (
    <div className="imgTitle">
      <h2>このサイトはU22のNazotool用テストページです。</h2>
      <p>
        Nazo
        Toolは、Webアプリケーションのセキュリティ診断と巡回を行うツールです。
        <br />
        クローラー機能では、HTMLやJavaScriptの解析、自動ログイン、cookie・headerの取得などを行います。
        <br />
        脆弱性診断機能では、SQLインジェクションやXSSなどの主要な脆弱性を検出し、リスク評価や対策方法をレポートとして提供します。
        <br />
        Nazo Toolで、簡単にWebアプリケーションのセキュリティを強化しましょう。
      </p>
      <img src="../Bar.png" className="barImage" alt="Bar" />
      <br />
      <div className="content">
        <img src="../Hirofumi.jpg" className="hiroImage" alt="Hirofumi" />
        <div className="text">
          <h2>店長紹介</h2>
          <p>
            こんにちは、エンジニア兼店長の田邊です。髪の長さが特徴です。
            <br />
            バックエンド、特にC#が得意です。
            <br />
            ユーザーフレンドリーなアプリケーションの開発や、セキュリティ強化に力を入れています。
            <br />
            チームでの協力を重視し、コードレビューを通じてスキルアップを図っています。
            <br />
            趣味はルーターいじりで、ネットワーク設定やカスタマイズを楽しんでいます。
            <br />
            どうぞよろしくお願いします。
            <br />
          </p>
          <h2>Q,なぜ店長なのに残業していらっしゃるんですか？</h2>
          <p>
            うーん、正直言うと、最近は本当に疲れ果ててるんですよ。
            <br />
            店長って聞くとカッコいいイメージがあるけど、実際はね、ストレスが結構たまるんですよ。
            <br />
            スタッフが思うように働かないとか、売上が伸び悩んでるとか、そういう問題が山積みで。
            <br />
            それに、上からのプレッシャーも結構きついんですよ。
            <br />
            売上目標達成とか、コスト削減とか、なんだかんだ言われるんですよね。
            <br />
            正直、自分ももっと楽に働きたいし、検証の時間も欲しいんですけど、なかなかそうもいかないんですよね。
            <br />
            やっぱり、この仕事って、思ってるよりもっと大変なんだなって、最近よく感じます。
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
