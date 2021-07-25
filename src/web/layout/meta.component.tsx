import React, { Component } from 'react';
import Head from 'next/head';

export default class Meta extends Component {
    props: any;

    private config = {
        name: 'Next Page',
        themeColor:'#673ab7',
        assetsPath:'/',
    }


    render() {
        let headers: any = {
            title: this.props.title || (this.config.name) || "Next Page",
            themeColor: this.config.themeColor,
            description: this.props.description || `sample app - ${(this.config.name) || "Next Page"}
            About this App: The ${(this.config.name) || "Next Page"} App is a one-stop platform for all your sample needs. `,
            ogType: "website",
            ogSiteName: this.config.name || "Next Page",
            ogImage: '',
            ogURL: "",
            manifest: this.config.assetsPath + 'manifest.json',
            icon: this.config.assetsPath + 'favicon.png',
            canonical: ''
        };
        headers = {
            ...headers,
            ogTitle: headers.title || '',
            ogDescription: headers.description,
            twitterCard: 'summary',
            twitterTitle: headers.ogTitle,
            twitterImage: headers.icon,
            twitterDescription: headers.description,
            twitterSite: "",
            twitterCreator: "",
            appleTouchIcon: headers.icon,
            ...this.props
        }
        return (
            <Head>
                <title>{headers.title}</title>
                <meta name="description" content={headers.description} />
                <meta name="Content-type" content="text/html" />
                <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
                <meta name="apple-mobile-web-app-title" content={(this.config.name) || "Next Page"}></meta>
                <link rel="apple-touch-startup-image" href={this.config.assetsPath + 'android-icon-512x512.png'}></link>
                <meta property="og:type" content={headers.ogType} />
                <meta name="og:title" property="og:title" content={headers.ogTitle} />
                <meta name="og:description" property="og:description" content={headers.ogDescription} />
                <meta property="og:site_name" content={headers.ogSiteName} />
                <meta property="og:url" content={headers.ogURL} />
                <meta name="twitter:card" content={headers.twitterCard} />
                <meta name="twitter:title" content={headers.twitterTitle} />
                <meta name="twitter:description" content={this.props.twitterDescription} />
                <meta name="twitter:site" content={headers.twitterSite} />
                <meta name="twitter:creator" content={headers.twitterCreator} />
                <meta name="theme-color" content={headers.themeColor}></meta>
                <link rel="icon" type="image/png" href={headers.icon} />
                <link rel="apple-touch-icon" href={headers.appleTouchIcon} />
                <meta property="og:image" content={headers.ogImage} />
                <meta name="twitter:image" content={headers.twitterImage} />
                <link rel="canonical" href={headers.canonical} />
                <link rel="manifest" href={headers.manifest} />
                {/* <meta name="viewport" content="width=device-width" /> */}
            </Head>
        )
    }
}
